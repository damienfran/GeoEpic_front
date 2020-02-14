import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client'
import { GeoServicesService } from '../geo-services.service'
import { Location } from '../Models/Location';
import { Item } from '../Models/Item';

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
    let L:Location = new Location(1, "","");

    let tempL:Location = await this.gss.getLocationById(L);
    L = tempL;

    console.log(L);

  }

  async getAllLocationsTest(){
    let inputdata:Location[] = await this.gss.getAllLocations();
    let temp:Location[] = inputdata;

    console.log(temp);
    console.log(temp[0].clue);

  }

  async getItemsForLocationTest(){
    let L:Location = new Location(1, "","");

    let tempL:Item[] = await this.gss.getItemsForLocation(L);
    let items:Item[] = tempL;

    console.log(items);
    console.log(items[0].name);
  }

  async getItemsForClientTest(){
    let C:Client = new Client(1,"","",0,false);
    let tempL:Item[] = await this.gss.getItemsForClient(C);
    let items:Item[] = tempL;

    console.log(items);
    console.log(items[0].name);    
  }

  async getItemByIdTest(){
    let I:Item = new Item(1,"","",0,null,null);

    let tempI:Item = await this.gss.getItemById(I);
    I = tempI;
    console.log(I);

  }



  async updateItemTest(){
    //get item
    let I:Item = new Item(28,"","",0,null,null);
    let tempI:Item = await this.gss.getItemById(I);
    I = tempI;

    //get location
    let L:Location = new Location(1, "","");

    let tempL:Location = await this.gss.getLocationById(L);
    L = tempL;



    I.location = L;
    I.client = null;
    console.log(I);
    tempI = await this.gss.updateItem(I);
    I = tempI;
    console.log(I);

  }

  async updateClientTest(){
    let c:Client = new Client(25,"tempc","tempcpass",0,false);
    let tempc:Client = await this.gss.updateClient(c);
    c = tempc;

    console.log(c);
  }

  async getClientByIdTest(){
    let c:Client = new Client(25,"","",0,false);
    let tempc:Client = await this.gss.getClientById(c);
    c = tempc;

    console.log(c);

  }

}
