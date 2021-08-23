import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { DataService } from '../services/data.service';
import * as $ from 'jquery'
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private service:ConfigService,private datasev:DataService,private act:ActivatedRoute,private spinner: NgxSpinnerService) { }
  nbr=0;
  carousel:any
  curcar:any
  qsn:any
  numbers:any
  services:any
  currentservice:any
  logos:any
  fcar:any
  ngOnInit(): void {
    this.spinner.show();
    this.service.get('/carousel-items').subscribe(d=>{
      this.carousel=d
      console.log(this.carousel)
      this.service.get("/dxc-presentation").subscribe(data=>{
        this.qsn=data['presentation']
        this.numbers = data['dxc_nombres'].sort(function(a, b) {return a.order - b.order});
        this.service.get("/services").subscribe(data=>{
          this.services=data
          this.service.get("/partenaires").subscribe(data=>{
            this.logos=data
            if(this.act.snapshot.routeConfig.path!=""){
  
              $(document).ready(()=>{
                setTimeout(() => {
                if(this.datasev.dataid!=false && this.datasev.dataid!=0){
                  $('html, body').animate({ scrollTop: $(this.datasev.dataid).offset().top-60}, 'slow');
                }
                else{
                  $('html, body').animate({ scrollTop: 0 }, 'slow');
                }
              }, 1000);
              });
            }
            this.spinner.hide();

          })
        },err=>{
          console.error(err)
        })
      },err=>{
        console.log(err);
      })
    },err=>{
      console.error(err)
    })
    
    
    

  }
  ngOnDestroy():void{
    this.datasev.dataid=false
  }
  
 
  show(serv){
    this.currentservice=serv
  }
  animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  @HostListener('window:scroll', ['$event']) 
  scroled(){
  //if(this.nbr==0 && this.numbers!=undefined)
  $(document).ready(() => {
    var obj = document.getElementById("number1");
    this.animateValue(obj, 0, this.numbers['ANS'], 2000);
    console.log(   " HELLLLOOOOOO" +this.animateValue(obj, 0, this.numbers['ANS'], 2000));
     obj = document.getElementById("number2");
    this.animateValue(obj, 0, this.numbers['CERTIFICATIONS'], 2000);
     obj = document.getElementById("number3");
    this.animateValue(obj, 0, this.numbers['membCLIENTSres'], 2000);
     obj = document.getElementById("number4");
    this.animateValue(obj, 0, this.numbers['COLLABORATEURS'], 2000);

    this.nbr++;
  })
}
}
