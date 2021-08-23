import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-certif-tech',
  templateUrl: './certif-tech.component.html',
  styleUrls: ['./certif-tech.component.css']
})
export class CertifTechComponent implements OnInit {

  partenaires:any;
  card:any;

  constructor(public service:ConfigService) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    this.service.get("/type-de-certifications").subscribe(
      data=>{

      this.partenaires = data;
      }, err => {
        console.log(err.message);
      }, () => {
        console.log(this.partenaires);
      })

      this.service.get("/certif-tech").subscribe(
        data=>{
    
        this.card = data;
        }, err => {
          console.log(err.message);
        }, () => {
          console.log(this.card);
        })
  }
  
  




}
