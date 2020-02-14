import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client'
import { GeoServicesService } from '../geo-services.service'
import { ILocation } from '../Models/ILocation';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {

  allClients:Client[];

  constructor(private gss:GeoServicesService) { }

  ngOnInit() {
  }

  async getAllClientsTest(){

    let inputdata:Client[] = await this.gss.getAllClients();
    let temp:Client[] = inputdata;

    console.log(temp);
    console.log(temp[0].username);

  }

  async logintest(){
    let c:Client  = new Client(0,"jason","jasonpass",0,true);

    let tempc:Client = await this.gss.login(c);
    c = tempc;

    console.log(c);

  }

  async createClientTest(){
    let c:Client  = new Client(0,"test1","test1pass",0,false);

    let tempc:Client = await this.gss.createClient(c);
    c = tempc;

    console.log(c);

  }

  async getLocationByIdTest(){
    let L:ILocation = new ILocation(1, "","");

    let tempL:ILocation = await this.gss.getLocationById(L);
    L = tempL;

    console.log(L);

  }

  async getAllLocationsTest(){
    let inputdata:ILocation[] = await this.gss.getAllLocations();
    let temp:ILocation[] = inputdata;

    console.log(temp);
    console.log(temp[0].clue);

  }

}
