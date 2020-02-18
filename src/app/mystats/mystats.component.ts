import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../Models/Client';
import { Item } from '../Models/Item';
import { GeoServicesService } from '../geo-services.service'

@Component({
  selector: 'app-mystats',
  templateUrl: './mystats.component.html',
  styleUrls: ['./mystats.component.css']
})
export class MystatsComponent implements OnInit {
  @Input() currentUser:Client;

  imageLocation:string = "";
  name:string;
  description:string;
  showAddToInventory:boolean;
  userItems:Array<Item> = [];
  rank:string = "";
  nextLevel:string = "";
  pointsToNextLevel:number = 0;


  constructor(private gss:GeoServicesService) { }

  async updateUserInfo(){
    let tempc:Client = await this.gss.getClientById(this.currentUser);
    this.currentUser = tempc;

    if (this.currentUser.score < 5000){
      this.nextLevel = "Poke Minor";
      this.pointsToNextLevel = 5000 - this.currentUser.score;
      this.imageLocation = "assets/images/Torchic2.png";
      this.rank = "Hatchling";
    }else if ( this.currentUser.score < 10000){
      this.nextLevel = "Poke Sensei";
      this.pointsToNextLevel = 10000 - this.currentUser.score;
      this.imageLocation = "assets/images/combusken2.png";
      this.rank = "Poke Minor";
    } else{
      this.nextLevel = "Continue";
      this.pointsToNextLevel = 0;
      this.imageLocation = "assets/images/blaziken2.png";
      this.rank = "Poke Sensei";  
    }
  }

  ngOnInit() {
    console.log("In MyStats");
    this.name = "";
    this.description = "";
    this.updateUserInfo();

    this.populateUserItems();
    this.showAddToInventory = false;

  }

  async populateUserItems(){// get items by Client
    let tempI:Item[] = await this.gss.getItemsForClient(this.currentUser);
    this.userItems = tempI;

  }
  
  async removeItem(tres:Item){

    tres.client = null;

    let TempI:Item = await this.gss.updateItem(tres);
    tres = TempI;

    console.log(tres);
    alert("Treasure successfully removed: " + tres.name);
    this.ngOnInit();

  }

  addItem(){
    this.showAddToInventory = true;
  }

  async addTreasureToInventory(){

    let value:number = 10 + Math.floor(Math.random() * Math.floor(140));

    let newTreasure:Item = new Item(0,this.name,this.description,value,this.currentUser,null);

    let TempI:Item = await this.gss.createItem(newTreasure);
    newTreasure = TempI;

    console.log(newTreasure);
    alert("Treasure successfully added: " + newTreasure.name);
    this.ngOnInit();

  }

}
