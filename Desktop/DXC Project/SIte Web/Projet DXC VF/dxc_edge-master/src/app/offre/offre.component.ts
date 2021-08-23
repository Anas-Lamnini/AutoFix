import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import * as $ from 'jquery'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute,private service:ConfigService,private spinner:NgxSpinnerService) { }
id:any;
card:any;
offre:any;
titre:any='Offre not found 404'
  ngOnInit(): void {
    this.spinner.show()
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    this.service.get("/offre-page").subscribe(
      data=>{
      this.card = data;
      let offreid = this.actRoute.snapshot.params.id;
    if(offreid!=undefined){
      this.id = this.getidfromlink(offreid)
      this.service.get('/offres/'+this.id).subscribe(offre=>{
this.titre=offre['titre']
this.offre = offre
this.spinner.hide()
},err=>{
  this.spinner.hide()

      })
    }
      }, err => {
      }, () => {
      });
    
  }
  getidfromlink(id){
    return ((id-3000)/4000);
  }
  localisation(str){
    if(str.includes('Tech')) return 'Technopolis, Salé'
    else return 'Casa Nearshore, Casablanca'
  }
  niveauexp(exp){
    if(exp.includes('Senior')) return 'Sénior'
    if(exp.includes('Confirme')) return 'Confirmé'
    else return 'Junior'
  }
  niveauedu(edu){
    var edd = edu.replaceAll('_',' ');
    var res = edd.replace('plus ','+');
    return res
  }

}
