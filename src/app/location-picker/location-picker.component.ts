import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Models/Client';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Location } from '../Models/Location';
import { GeoServicesService } from '../geo-services.service'


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
  // locationNumber:number = 0;

  currentLocation:Location = null;
  theLocations:Location[];

  currentHint:string;
  key:string = "AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
  locCoord:string;
  // testLocation:string;
  name = 'Set iframe source';
  url: string = "https://www.google.com/maps/embed/v1/place?q=39.631979,-79.953752&key=AIzaSyCucQ06qPPCTCDsw7SMCAAVGNWA7WdnHwk";
  urlSafe: SafeResourceUrl;


  constructor(public sanitizer: DomSanitizer, private gss:GeoServicesService) { }

  updateMapURL(){
    this.url = `https://www.google.com/maps/embed/v1/place?q=${this.locCoord}&key=${this.key}`;
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit() {
    this.showLocationMenu = true;
    this.showTreasuresList = false;
    this.showTreasureMap = false;

    this.initializeLocations();
    
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
    

    this.showTreasureMap = true;
    
    // this.locationNumber = 1;
    this.currentLocation = this.theLocations[0];

    this.currentHint = this.theLocations[0].clue;
  }

  openLocationTwo(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[1].geoLocation;
    this.updateMapURL();

    this.showTreasureMap = true;

    // this.locationNumber = 2;
    this.currentLocation = this.theLocations[1];


    this.currentHint = this.theLocations[1].clue;
  }

  openLocationThree(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[2].geoLocation;
    this.updateMapURL();

    this.showTreasureMap = true;

    // this.locationNumber = 3;
    this.currentLocation = this.theLocations[2];
    
    this.currentHint = this.theLocations[2].clue;
  }

  openLocationFour(){
    this.showTreasuresList = false;
    this.locCoord = this.theLocations[3].geoLocation;
    this.updateMapURL();

    this.showTreasureMap = true;

    // this.locationNumber = 4;
    this.currentLocation = this.theLocations[3];

    this.currentHint = this.theLocations[3].clue;
  }

  treasureBoxFound(){
    this.showTreasureMap = false;
    this.showTreasuresList = true;
  }

  editLocationCoordinates(){
    // code here later
  }
}
