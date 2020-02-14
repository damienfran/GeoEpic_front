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

    //reset screen
    this.ngOnInit();
  }

  addTreasure(){
    //put code here
  }

  removeTreasure(){
    //put code here
  }

}
