import { Component, OnInit } from '@angular/core';
import { faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  play=faPlayCircle

  constructor(private service:ConfigService) { }
  footerp:any
  ngOnInit(): void {
    this.service.get("/footer-presse").subscribe(data=>{
this.footerp=data
    })
  }
  link(id){
    return '/presse/'+((4000*id)+3000);
  }

}
