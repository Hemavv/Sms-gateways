import { Component } from '@angular/core';
import {SmsserviceService}from './smsservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SMS GATEWAY';
 test:any = {
   "apiKey": '',
   "sender":'',
   "numbers": '',
   "message":''
 }
 constructor(private sms:SmsserviceService){
}
 send(){
   console.log(this.test);
   this.sms.requestSms(this.test);
 }

}
