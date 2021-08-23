import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-they-trust-us',
  templateUrl: './they-trust-us.component.html',
  styleUrls: ['./they-trust-us.component.css']
})
export class TheyTrustUsComponent implements OnInit {

  partenaires:any;
  card:any;

  constructor(public service:ConfigService) { }

  ngOnInit(): void {
    $('html, body').animate({ scrollTop: 0 }, 'slow');

    this.service.get("/type-de-partenaires").subscribe(
      data=>{

      this.partenaires = data;
      }, err => {
        console.log(err.message);
      }, () => {
        console.log(this.partenaires);
      })

      this.service.get("/they-trust-us").subscribe(
        data=>{
    
        this.card = data;
        }, err => {
          console.log(err.message);
        }, () => {
          console.log(this.card);
        })
  }
  
  




}
