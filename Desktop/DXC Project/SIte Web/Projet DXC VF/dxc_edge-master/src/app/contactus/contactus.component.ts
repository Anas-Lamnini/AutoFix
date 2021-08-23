import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,Validators, FormControl, FormBuilder } from '@angular/forms';
import { faCheckCircle,faTimesCircle,faSyncAlt} from '@fortawesome/free-solid-svg-icons'; 
import { ConfigService } from '../services/config.service';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})

export class ContactusComponent implements OnInit {
  fg :FormGroup
  card:any;
  isdone=false;
  isnotdone=false;
  donne = faCheckCircle;
  refr = faSyncAlt;
  ndonne =faTimesCircle;
  @ViewChild('Mycanvas', {static: false}) c: ElementRef;
  ctx :any;
  loadcap(): void {
    this.ctx = (this.c.nativeElement as HTMLCanvasElement).getContext("2d");
    this.resetCanvas()
  }
  numb = [1,2,3,4];
  rmp=false;
  constructor(public service:ConfigService,private fb: FormBuilder,private spinner: NgxSpinnerService) { 
      this.fg = this.fb.group({
      prenom: ['', [Validators.required]],
      nom: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      tel: ['', [Validators.required]],
      entreprise: ['', [Validators.required]],
      fonction: ['', [Validators.required]],
      commentaire: ['', [Validators.required]],
      sujet: ['', [Validators.required]],
      relation: ['', [Validators.required]],
      captcha:['',[Validators.required]],
      accept:['',[Validators.required]]
      });
  }
  invalidecaptcha:any=false

  ngOnInit(): void {
    this.spinner.show();
    
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    this.service.get("/contactus").subscribe(
      data=>{
        this.loadcap()
        $("#submitcap").click(() =>{
          var numcheck = Number(this.fg.get('captcha').value);
          console.log(numcheck)
          if(numcheck === (this.numb[0]*1000)+(this.numb[1]*100)+(this.numb[2]*10)+(this.numb[3])) {
            this.clear()
            this.submit()
            this.resetCanvas()
            this.invalidecaptcha = false

          } else {
            this.invalidecaptcha = true
            this.clear()
            this.resetCanvas()
        this.fg.get('captcha').setValue('')
          };
        });
      this.card = data;
      this.spinner.hide()

      }, err => {
      }, () => {
      })
  }
  submit(){
    console.log("vv")
    if(this.fg.valid){
      console.log("vvv")

      this.rmp=false
      this.spinner.show()
      var data = {
        "prenom":this.fg.get('prenom').value,
        "nom":this.fg.get('nom').value,
        "email":this.fg.get('email').value,
        "telephone":this.fg.get('tel').value,
        "entreprise":this.fg.get('entreprise').value,
        "fonction":this.fg.get('fonction').value,
        "commentaire":this.fg.get('commentaire').value,
        "sujet":this.fg.get('sujet').value,
        "relation_avec_dxc":this.fg.get('relation').value
      }
      this.service.post("/contacts",data).subscribe(res=>{
        console.log(res)
        this.isdone=true
        const formData = new FormData();
        formData.append("data",JSON.stringify(data));
        const headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        this.service.posth("/contacteznous",formData,headers).subscribe(res=>{
          $('html, body').animate({ scrollTop: 300 }, 'slow');
          this.spinner.hide()
                },err=>{
                  this.spinner.hide()
                })
      },err=>{
        console.error(err)
        this.isnotdone=true
        this.spinner.hide()
      })
    }
    else{
      this.rmp=true
    }
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
}
