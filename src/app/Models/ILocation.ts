
//this is called ILocation, instead of Location, because Location already meant something else

export class ILocation{
    lId:number;
    clue:string;
    geoLocation:string;

    constructor(lId:number, clue:string, geoLocation:string){
        this.lId = lId;
        this.clue = clue;
        this.geoLocation = geoLocation;

    }


}