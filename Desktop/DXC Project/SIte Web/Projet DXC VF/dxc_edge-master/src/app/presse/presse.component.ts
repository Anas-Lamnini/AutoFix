import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-presse',
  templateUrl: './presse.component.html',
  styleUrls: ['./presse.component.css']
})
export class PresseComponent implements OnInit {
  p:any;

  constructor(public service:ConfigService,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    var pid = this.actRoute.snapshot.params.id;

    if(pid!=undefined){
      pid=this.getidfromlink(pid)
      this.service.get("/communique-de-presses/"+pid).subscribe(
        data=>{
  
        this.p = data;
        }, err => {
          console.log(err.message);
        }, () => {
          console.log(this.p);
        })
    }
  
    
  }
  getidfromlink(id){
    return ((id-3000)/4000);
  }

}
