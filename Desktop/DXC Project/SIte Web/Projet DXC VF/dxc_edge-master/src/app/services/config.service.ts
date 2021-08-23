import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  host="http://localhost:9191";
  constructor(private http:HttpClient) { }
  get(url){
    return this.http.get(this.host+url);
   }
   post(url,data){
    return this.http.post(this.host+url,data);
   }
   posth(url,data,h){
    return this.http.post(this.host+url,data,h);
   }
}
