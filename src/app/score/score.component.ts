
import { Component, OnInit } from '@angular/core';
import {GeoServicesService} from '../geo-services.service';
import {Client} from '../models/Client';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  clientss:Array<number> = [10,9,33];
  clients:Array<Client>;
  scores:Array<Client>;
  username:any;
  points:number;
  sortedArray:Array<Client>;

  constructor(private gss:GeoServicesService, private titleService:Title) {  }
 
async findScore(){
  let response:any = await this.gss.getAllClients();

  this.clients = response;
  this.sortedArray = this.clients.slice(0);
  this.sortedArray.sort((left, right) => {
    if (left.score < right.score) return 1;
    if (left.score > right.score) return -1;
   return 0;
})

}

  ngOnInit() {
    this.titleService.setTitle("GeoEpic - High Scores");

    this.findScore();
  }
 
  sort():Array<Client>{
    console.log("hi");
    console.log(this.sortedArray);
let sortedArray = this.clients.slice(0);
  sortedArray.sort((left, right) => {
    if (left.score < right.score) return 1;
    if (left.score > right.score) return -1;
   return 0;
})


this.scores = this.sortedArray
   return this.scores;
  
}

}