import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Models/Client';
import { Item } from '../Models/Item';
import { Location } from '../Models/Location';
import { GeoServicesService } from '../geo-services.service'

@Component({
  selector: 'app-treasures-list',
  templateUrl: './treasures-list.component.html',
  styleUrls: ['./treasures-list.component.css']
})
export class TreasuresListComponent implements OnInit {

  @Input() currentLocation:Location;
  // @Input() locationNumber:number;
  @Input() currentUser:Client;

  treasures:Array<Item> = [];
  userItems:Array<Item> = [];
  boxSwapItem:Item = null;
  userSwapItem:Item = null;
  showTreasures:boolean = false;
  readyForSwap:boolean = false;
  addTreasureMenu:boolean = false;
  removeTreasureMenu:boolean = false;
  showSwapNewTreasure:boolean = false;

  name:string;
  description:string;
  value:number;


  constructor(private gss:GeoServicesService) { }

  async populateTreasureList(){ // get items by current location
    let L:Location = new Location(this.currentLocation.lId, "","");
    let tempL:Item[] = await this.gss.getItemsForLocation(L);
    this.treasures = tempL;

  }

  async populateUserItems(){// get items by Client
    let tempI:Item[] = await this.gss.getItemsForClient(this.currentUser);
    // let items:Item[] = tempI;
    this.userItems = tempI;

  }


  ngOnInit() {
    console.log("In treasures-List component");
    console.log(this.currentUser);
    console.log(this.currentLocation);

    this.boxSwapItem = null;
    this.userSwapItem = null;
    this.readyForSwap = false;

    this.populateTreasureList();
    this.populateUserItems();
    this.showTreasures=true;
    this.addTreasureMenu = false;
    this.removeTreasureMenu = false;
    this.showSwapNewTreasure = false;

    this.name = "";
    this.description = "";
    this.value = 0;
  }

  swapTreasure(T:Item){
    this.boxSwapItem = T;
    if ( (this.userSwapItem != null) && (this.boxSwapItem != null)){
      this.readyForSwap = true;
      this.showTreasures = false;
    }

  }

  swapUserItem(T:Item){
  this.userSwapItem = T;
    if ( (this.userSwapItem != null) && (this.boxSwapItem != null)){
      this.readyForSwap = true;
      this.showTreasures = false;
    }

  }

  //User item gets no owner/no location
  //box item gets both owner and location
  async doSwap(){
    //update boxSwapItem
    this.boxSwapItem.location = null;
    this.boxSwapItem.client = this.currentUser;

    let tempI:Item = await this.gss.updateItem(this.boxSwapItem);
    this.boxSwapItem = tempI;


    



    //update userSwapItem
    this.userSwapItem.client = null;
    this.userSwapItem.location = this.currentLocation;

    let tempI2 = await this.gss.updateItem(this.userSwapItem);
    this.userSwapItem = tempI2;

    //Update User's score
    this.currentUser.score += this.userSwapItem.value;
    let tempc:Client = await this.gss.updateClient(this.currentUser);
    this.currentUser = tempc;

    // Check if user is qualified to become a Poke Sensei or minor
    if (this.currentUser.score > 9999){
      this.currentUser.manager = true;
      tempc = await this.gss.updateClient(this.currentUser);
      this.currentUser = tempc;
      alert("Congratulations!!!  You have mastered Poke Trading.  You are now a Poke Sensei!!!!");
    } else if (this.currentUser.score > 4999){
      alert("Congratulations!!! You have gained enough experience to graduate into a Poke Minor!!!!");
    }


    //reset screen
    this.ngOnInit();
  }

  addTreasure(){
    this.showTreasures = false;
    this.addTreasureMenu = true;
  }

  async addTreasureToBox(){
    let newTreasure:Item = new Item(0,this.name,this.description,this.value,null,this.currentLocation);

    let TempI:Item = await this.gss.createItem(newTreasure);
    newTreasure = TempI;

    console.log(newTreasure);
    alert("Treasure successfully added: " + newTreasure.name);
    this.ngOnInit();

  }

  removeTreasure(){
    this.showTreasures = false;
    this.removeTreasureMenu = true;
  }

  async removeFromBox(tres:Item){
    tres.location = null;

    let TempI:Item = await this.gss.updateItem(tres);
    tres = TempI;

    console.log(tres);
    alert("Treasure successfully removed: " + tres.name);
    this.ngOnInit();

  }

  swapNewTreasure(){
    if (this.boxSwapItem != null){  // user needs to have picked a box treasure to swap
      this.showTreasures = false;
      this.showSwapNewTreasure = true;
    }else{
      alert("Choose a box item to swap for!")
    }
  }

  async newItemSwap(){

    let value:number = 10 + Math.floor(Math.random() * Math.floor(140));

    let newTreasure:Item = new Item(0,this.name,this.description,value,this.currentUser,null);

    let TempI:Item = await this.gss.createItem(newTreasure);
    // newTreasure = TempI;
    this.userSwapItem = TempI;

    this.doSwap();

  }

}
