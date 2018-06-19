import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class SmsserviceService {
  headers = new Headers();
  constructor(private http:HttpClient){

  }
  requestSms(data : Object){
    let url = 'https://api.textlocal.in/send/?apiKey='+data['apiKey']+'&sender='+data['sender']+'&numbers='+data['numbers']+'&message='+data['message'];
    
      this.http.post(url,data).subscribe(res => console.log(res));
    console.log(data);
  }
}
