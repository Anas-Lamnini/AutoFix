import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { faMapMarkerAlt,faBriefcase,faClock,faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
card:any;
offres:any;
map=faMapMarkerAlt
case=faBriefcase
clock=faClock
previcon=faArrowLeft
nexticon=faArrowRight
currentoffres=[]
previos=false
next=false
nbrelemnt=2;
nbrofpages
numbers
currpage=0
first=true
  constructor(private service:ConfigService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.service.get("/carriere").subscribe(
      data=>{
      this.card = data;
      this.service.get("/offres").subscribe(
        data=>{
        this.offres = data;
        this.nbrofpages = this.offres.length/this.nbrelemnt
        this.nbrofpages=Math.ceil(this.nbrofpages)
        this.numbers = Array(this.nbrofpages).fill(null).map((x,i)=>i);
        console.log(this.nbrofpages)
        this.pagination(0)
        }, err => {
        }, () => {
        });
      }, err => {
      }, () => {
      });
      
  }
  markdownrv(offre){
    var first = offre.substring(0, 200);
    var res = first.replaceAll("**","") + "...";
    return res
  }
  localisation(str){
    if(str.includes('Tech')) return 'Technopolis, Salé'
    else return 'Casa Nearshore, Casablanca'
  }
  link(id){
    return '/offre/'+((4000*id)+3000);
  }
  pagination(page){
    this.currentoffres=[]
    for (var i=page*this.nbrelemnt; i<((page+1)*this.nbrelemnt) && i<Object.keys(this.offres).length;i++){
      this.currentoffres.push(this.offres[i]);
    }
    if (page != 0 && page != this.nbrofpages){
      this.previos = true;
      this.next = true;  

    }

    if(page == 0 ){
      this.previos = false;
      if (this.nbrofpages > 1){
        this.next = true;
      }
    }
    if(page == this.nbrofpages-1){
       this.next = false;
      
     } 
    this.currpage=page
     
  if(this.first){
    $(document).ready( ()=>{
      for(var a of this.numbers){
        document.getElementById('page-'+a).classList.remove('activebtn');
      }
      document.getElementById('page-'+page).classList.add('activebtn');
  });
  this.first=false
  }else{
    for(var a of this.numbers){
      document.getElementById('page-'+a).classList.remove('activebtn');
    }
    document.getElementById('page-'+page).classList.add('activebtn');
    $('html, body').animate({
      scrollTop: $("#container").offset().top
    
  }, 500)

  }
  this.spinner.hide()

  }
}
