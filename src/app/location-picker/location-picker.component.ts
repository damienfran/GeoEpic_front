import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Models/Client';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '../Models/Location';
import { GeoServicesService } from '../geo-services.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.css']
})
export class LocationPickerComponent implements OnInit {
  @Input() currentUser:Client;

  
  showTreasuresList:boolean = false;
  showLocationMenu:boolean = true;
  showTreasureMap:boolean = false;
  editTreasureLocation:boolean = false;
  
  newClueInput:string;
  newLocationInput:string;
  currentLocation:Location = null;
  theLocations:Location[];

  currentHint:string;
  key:string = "AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
  locCoord:string;
  name = 'Set iframe source';
  url: string = "https://www.google.com/maps/embed/v1/place?q=39.631979,-79.953752&key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
  urlSafe: SafeResourceUrl;


  constructor(public sanitizer: DomSanitizer, private gss:GeoServicesService, private titleService:Title) { }

  updateMapURL(){
    this.url = `https://www.google.com/maps/embed/v1/place?q=${this.locCoord}&key=${this.key}`;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit() {
    this.titleService.setTitle("GeoEpic - Location Picker");
    this.showLocationMenu = true;
    this.showTreasuresList = false;
    this.showTreasureMap = false;
    this.editTreasureLocation = false;

    this.initializeLocations();
    
  }

  async updateUserInfo(){
    let tempc:Client = await this.gss.getClientById(this.currentUser);
    this.currentUser = tempc;
  }

  async initializeLocations(){
    let inputdata:Location[] = await this.gss.getAllLocations();
    this.theLocations = inputdata;

    console.log(this.theLocations[0].geoLocation);

  }


  openLocationOne(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[0].geoLocation;
    this.updateMapURL();
    this.updateUserInfo();

    this.showTreasureMap = true;
    
    this.editTreasureLocation = false;
    this.currentLocation = this.theLocations[0];

    this.currentHint = this.theLocations[0].clue;
  }

  openLocationTwo(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[1].geoLocation;
    this.updateMapURL();
    this.updateUserInfo();
    this.showTreasureMap = true;

    this.editTreasureLocation = false;
    this.currentLocation = this.theLocations[1];


    this.currentHint = this.theLocations[1].clue;
  }

  openLocationThree(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[2].geoLocation;
    this.updateMapURL();
    this.updateUserInfo();
    this.showTreasureMap = true;

    this.editTreasureLocation = false;
    this.currentLocation = this.theLocations[2];
    
    this.currentHint = this.theLocations[2].clue;
  }

  openLocationFour(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[3].geoLocation;
    this.updateMapURL();
    this.updateUserInfo();
    this.showTreasureMap = true;
    this.editTreasureLocation = false;
    this.currentLocation = this.theLocations[3];

    this.currentHint = this.theLocations[3].clue;
  }

  treasureBoxFound(){
    
    this.showTreasureMap = false;
    this.showTreasuresList = true;
  }

  editLocationCoordinates(){
    this.editTreasureLocation = true;
  }

  async submitCoordinates(){
    if (this.newLocationInput == "" || this.newLocationInput == null){
      alert("Please Enter new Coordinates!");
      return;
    }

    this.currentLocation.geoLocation = this.newLocationInput;
    this.currentLocation.clue = this.newClueInput;

    let tempC:Location = await this.gss.updateLocation(this.currentLocation);
    console.log(this.currentLocation.geoLocation);

    this.currentLocation = tempC;

    alert("Location updated to " + this.currentLocation.geoLocation);
    this.newLocationInput = "";
    this.newClueInput = "";
    this.editTreasureLocation = false;
  }
}
