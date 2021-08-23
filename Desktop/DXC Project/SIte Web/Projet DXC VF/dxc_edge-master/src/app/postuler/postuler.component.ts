import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfigService } from '../services/config.service';
import { faCheckCircle,faTimesCircle,faSyncAlt} from '@fortawesome/free-solid-svg-icons'; 
import * as $ from 'jquery'

import { nextTick } from 'process';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  fg :FormGroup
  @ViewChild('Mycanvas', {static: false}) c: ElementRef;
  ctx :any;
  rmp=false;

  refr = faSyncAlt;
  invalidecaptcha:any=false
  isdone=false;
  isnotdone=false;
  donne = faCheckCircle;
  ndonne =faTimesCircle;
  loadcap(): void {
    this.ctx = (this.c.nativeElement as HTMLCanvasElement).getContext("2d");
    this.resetCanvas()
  }
  numb = [1,2,3,4];
  constructor(private actRoute: ActivatedRoute,private service:ConfigService,private spinner:NgxSpinnerService,private fb: FormBuilder) {
    this.fg = this.fb.group({ 
      prenom: ['', [Validators.required]],
      nom: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      captcha:['',[Validators.required]],
      accept:[''],
      cv: [null,Validators.required],
      lm: [null,Validators.required]
      });
   }
   offre:any;
   isSizeLargeCV : any;
   isSizeLargeLM :any;
   onFileChange(event:any, controlName:any) {
     this.isSizeLargeCV = false;
     this.isSizeLargeLM = false;
     if(event.target.files.length !== 0) {
       if(event.target.files[0].size <= 3048576){
         this.fg.controls[controlName].setValidators([])
         console.log(event.target.files[0])
         this.fg.patchValue({
           [controlName]: event.target.files[0],
         });
       }
       else{
         if(controlName == "cv"){
           this.isSizeLargeCV = true;
         } else if(controlName == "lm"){
           this.isSizeLargeLM = true;
         } 
       }
     }
   }
   
  ngOnInit(): void {
    var offerid= this.actRoute.snapshot.params.id;
    this.service.get('/offres/'+offerid).subscribe(d=>{
      console.log(d)
      this.offre=d
    },err=>{
    },()=>{
      setTimeout(
        ()=> 
        {
          this.loadcap()
          $("#submitcap").click(() =>{
            var numcheck = Number(this.fg.get('captcha').value);
            console.log(numcheck)
            if(numcheck === (this.numb[0]*1000)+(this.numb[1]*100)+(this.numb[2]*10)+(this.numb[3])) {
              this.clear()
              this.submit()
              this.num();
              this.height();
              this.sts();
              this.captcha();
              this.design();
              this.invalidecaptcha = false
  
            } else {
              this.invalidecaptcha = true
              this.clear()
              this.resetCanvas()
          this.fg.get('captcha').setValue('')
            };
          });
        }, 2000);
    }
    )
  }
  num() {
    this.numb[0] = Math.floor(Math.random()*10);
    this.numb[1] = Math.floor(Math.random()*10);
    this.numb[2] = Math.floor(Math.random()*10);
    this.numb[3] = Math.floor(Math.random()*10);
  };
  
   sets = [80,180,280,380];
  
   sts() {
    this.sets[0] = Math.random() * (80 - 10) + 10;
    this.sets[1] = Math.random() * (180 - 100) + 70;
    this.sets[2] = Math.random() * (280 - 200) + 140;
    this.sets[3] = Math.random() * (370 - 300) + 210;
    this.sets = [10,50,100,140];

  };
  
   hei = [95,95,95,95];
  
   height() {
    this.hei[0] = Math.random() * (95 - 30) + 30;
    this.hei[1] = Math.random() * (95 - 30) + 30;
    this.hei[2] = Math.random() * (95 - 30) + 30;
    this.hei[3] = Math.random() * (95 - 30) + 30;
    this.hei = [30,30,30,30];
  };
  
   captcha() {
    this.ctx.font = " italic 40px Arial";
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(String(this.numb[0]),this.sets[0],this.hei[0]);
    this.ctx.fillText(String(this.numb[1]),this.sets[1],this.hei[1]);
    this.ctx.fillText(String(this.numb[2]),this.sets[2],this.hei[2]);
    this.ctx.fillText(String(this.numb[3]),this.sets[3],this.hei[3]);
  };
  
   design() {
    this.ctx.fillText("|",this.sets[0]+10,this.hei[0]);
    this.ctx.fillText("|",this.sets[1]+10,this.hei[1]);
    this.ctx.fillText("|",this.sets[2]+10,this.hei[2]);
    this.ctx.fillText("|",this.sets[3]+10,this.hei[3]);
    this.ctx.strokeStyle = "#FFF";
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.sets[0], this.hei[0]-15);
    this.ctx.lineTo(this.sets[1]+10, this.hei[1]-15);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(this.sets[1]+10, this.hei[1]-15);
    this.ctx.lineTo(this.sets[2]+10, this.hei[2]-15);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(this.sets[2]+10, this.hei[2]-15);
    this.ctx.lineTo(this.sets[3]+25, this.hei[3]-15);
    this.ctx.stroke();
    this.ctx.closePath();
  };
  
   resetCanvas() { 
    this.spinner.show()
    setTimeout(
      ()=> 
      {
        this.num();
        this.height();
        this.sts();
        this.captcha();
        this.design();
        this.spinner.hide()
            }, 3000);
    

  };
  
   clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    $("#input").val("");
  };
  submit(){
    console.log('vv')
    if(this.fg.valid){
      console.log('vv')
      this.rmp=false
      this.spinner.show()
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    const formData = new FormData();
    var f1 = this.fg.get('cv').value;
    var f2 = this.fg.get('lm').value;
    formData.append('files.cv', f1);
    formData.append('files.lettre', f2);
    var data = {"Prenom":this.fg.get('prenom').value,
    "Nom":this.fg.get('nom').value,
    "Email":this.fg.get('email').value,
    "Offre":this.offre['titre'],
    "Reference":this.offre['reference'],
    }
    formData.append("data",JSON.stringify(data));
    this.service.posth('/condidature', formData,headers)
      .subscribe(res => {
      this.isdone=true  
      this.spinner.hide();    
        },err=>{
this.isnotdone=false;
this.spinner.hide();    
        })
    }
    else{
      this.rmp=true
    }
  }
}
