import { Client } from "./Client";
import { Location } from "./Location";


export class Item{

    iId:number;
    name:string;
    description:string;
    value:number;
    client:Client;
    location:Location; // Location meant something else, so use ILocation

    constructor(iId:number, name:string, description:string, value:number, client:Client, location:Location){
        this.iId = iId;
        this.name = name;
        this.description = description;
        this.value = value;
        this.client = client;
        this.location = location;
    }

}