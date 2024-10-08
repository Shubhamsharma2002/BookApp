import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { apiUrls } from '../api.urls';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  registerService(registerObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}register`,registerObj);
  }

  loginService(loginObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}login`,loginObj);
  }

  sendEmailService(email:string){
    return this.http.post<any>(`${apiUrls.authServiceApi}send-email`,{email:email})
  }
  reetPasswordService(resetObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}reset-password`,resetObj)
  }

  isLogedIn(){
    return !!localStorage.getItem("user_id");
  }



  // bhevaril subject
  isLogedIn$ = new BehaviorSubject<boolean>(false);
}
