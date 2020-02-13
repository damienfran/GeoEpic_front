import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../app/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class GetAllClientsService {

  constructor(private http:HttpClient) { }


//   getACard():Promise<smallDeck>{
//     return this.http.get<smallDeck>('https://deckofcardsapi.com/api/deck/new/draw/?count=1').toPromise();
// }

getAllTheClients():Promise<string>{
    return this.http.get<string>('http://localhost:8080/getAllClients').toPromise();
}


}
