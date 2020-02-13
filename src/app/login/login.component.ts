import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client';
import { Config } from '../Models/Config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parentMessage = "WOOHA!!!";

  usernm:string;
  userpassword:string;
  infoManager:string;
  isManager:boolean;
  loginSuccessful:boolean = false;
  currentUser:Client;
  showLogout:boolean = false;
  
  constructor() { }


  ngOnInit() {
    console.log("Location of server: " + Config.server);
  }

  submit(){
    if (this.infoManager.toLowerCase() == 'true'){
      this.isManager = true;
    }else{
      this.isManager = false;
    }

    this.currentUser = new Client(0,this.usernm,this.userpassword,0,this.isManager);

    console.log(this.currentUser);


    this.loginSuccessful = true;
    this.showLogout = true;
  }


  doLogout(){
    this.loginSuccessful = false;
    this.currentUser = null;
    this.showLogout = false;

    this.usernm = "";
    this.userpassword = "";
    this.infoManager = "";

  }
}
