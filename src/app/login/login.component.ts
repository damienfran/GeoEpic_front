import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Models/Client';
import { Config } from '../Models/Config';
import { GeoServicesService } from '../geo-services.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parentMessage = "WOOHA!!!";

  usernm:string;
  userpassword:string;
  // infoManager:string;
  // isManager:boolean;
  loginSuccessful:boolean = false;
  currentUser:Client;
  showLogout:boolean = false;
  showLocation:boolean = false;
  showStats:boolean = false;
  // showNavigationOptions:boolean = false;
  
  constructor(private gss:GeoServicesService) { }


  ngOnInit() {
    console.log("Location of server: " + Config.server);
  }

  async submit(){
    let c:Client = new Client(0,this.usernm,this.userpassword,0,false);

    let tempc:Client = await this.gss.login(c);
    this.currentUser = tempc;

    console.log(this.currentUser);
    if (this.currentUser == null){
      alert("Incorrect Username/Password!");
      this.usernm = "";
      this.userpassword = "";
      return;
    }

    this.loginSuccessful = true;
    this.showLogout = true;

    this.showStats = true;
    // this.showNavigationOptions = false;
    this.showLocation = false;
  }



  async addNewUser(){
    if ((this.usernm == "")||(this.userpassword == "")){
      alert("Please enter valid Username/Password");
      this.usernm = "";
      this.userpassword = "";
      return;
    }

    let c:Client = new Client(0,this.usernm,this.userpassword,0,false);

    let tempc:Client = await this.gss.createClient(c);
    this.currentUser = tempc;

    console.log(this.currentUser);
    alert("Account successfully created. Please log in.");
    this.usernm = "";
    this.userpassword = "";
    return;

    // this.loginSuccessful = true;
    // this.showLogout = true;



  }

  doLogout(){
    this.loginSuccessful = false;
    this.currentUser = null;
    this.showLogout = false;

    this.usernm = "";
    this.userpassword = "";
    // this.infoManager = "";
    // this.showNavigationOptions = false;
    this.showStats = false;
    this.showLocation = false;
  }

  seeMyStats(){
    this.showStats = true;
    // this.showNavigationOptions = false;
    this.showLocation = false;
  }

  goToLocation(){
    this.showLocation = true;
    // this.showNavigationOptions = false;
    this.showStats = false;
  }

}
