import { Client } from "./Client";
import { ILocation } from "./ILocation";


export class Item{

    iId:number;
    name:string;
    description:string;
    value:number;
    client:Client;
    ilocation:ILocation; // Location meant something else, so use ILocation

    constructor(iId:number, name:string, description:string, value:number, client:Client, ilocation:ILocation){
        this.iId = iId;
        this.name = name;
        this.description = description;
        this.value = value;
        this.client = client;
        this.ilocation = ilocation;
    }

}