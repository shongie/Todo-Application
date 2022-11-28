import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_API ="http://localhost:1000/api";

  constructor(private http : HttpClient) { }
  login(body:any)  {
    return this.http.post(this.AUTH_API + '/login', body, {responseType: 'json'});
  }
    register(body:any){
    return this.http.post(this.AUTH_API  + '/register',body);
  }


}
