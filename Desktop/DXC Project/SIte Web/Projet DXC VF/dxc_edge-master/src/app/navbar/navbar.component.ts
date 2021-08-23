import { Component, OnInit } from '@angular/core';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { collapseAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, rubberBandAnimation } from 'angular-animations';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
 
})
export class NavbarComponent implements OnInit {
iconmenu=faBars;
iconclose=faTimes
isopend=false;
navbar:any
sticky:any
content:any
  constructor(private dataserv:DataService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
      // When the user scrolls the page, execute myFunction
window.onscroll =  () => {this.stickk()};

// Get the navbar
 this.navbar = document.getElementById("navbar");
 this.content = document.getElementById("content");
// Get the offset position of the navbar
 this.sticky = this.navbar.offsetTop;
    
  }
  open(){
this.isopend=(!this.isopend)
  }


stickk() {
  if (window.pageYOffset >= this.sticky) {
    this.content.classList.add('divi')

    this.navbar.classList.add("sticky")
  } else {
    this.navbar.classList.remove("sticky");

    this.content.classList.remove('divi')

  }
}
setid_(id,op) {
  this.spinner.show();

  this.dataserv.dataid = id
  $( document ).ready(()=> {
    setTimeout(() => {

    if(id!=0){
      $('html, body').animate({ scrollTop: $(id).offset().top-60}, 'slow');
    
    }
    else{
      $('html, body').animate({ scrollTop: 0 }, 'slow');
    
    }
    this.spinner.hide();
  }, 1000);});

if(op){
  this.open()
}
}

}
