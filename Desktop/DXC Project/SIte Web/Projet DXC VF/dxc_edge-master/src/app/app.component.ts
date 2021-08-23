import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontoffice';
  iscockiesclicked :any=false;
  constructor(private spinner:NgxSpinnerService){

  }
  ngOnInit():void{
    var iscockie =localStorage.getItem('ckscca');
    console.log(iscockie)
    if(iscockie==undefined){
      this.iscockiesclicked=true;
    }
  }
  accpt(){
    localStorage.setItem('ckscca','true')
    this.spinner.show()
    setTimeout(
      ()=> 
      {
        this.spinner.hide()
    this.iscockiesclicked=false;
            }, 1000);
    

  }

}
