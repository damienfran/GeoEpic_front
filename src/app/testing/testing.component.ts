import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAllClientsService } from '../../GeoServices/get-all-clients.service'
import { Client } from '../Models/Client'

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  allClients:Client[];

  constructor(private gacs:GetAllClientsService) { }

  ngOnInit() {
  }

  async test1(){

    // let inputdeck:smallDeck = await this.gcs.getACard();
    // this.oneCardDeck = inputdeck;

    let inputdata:string = await this.gacs.getAllTheClients();
    // this.allClients = inputdata;

    console.log(inputdata);
  }
}
