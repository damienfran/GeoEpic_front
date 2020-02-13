import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/Client'
import { GeoServicesService } from '../geo-services.service'

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

  async test1(){

    let inputdata:Client[] = await this.gss.getAllClients();
    let temp:Client[] = inputdata;

    console.log(temp);
    console.log(temp[0].username);



  }

  


}
