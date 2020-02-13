import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../app/Models/Client';

@Injectable({
  providedIn: 'root'
})
export class GeoServicesService {

  constructor(private http:HttpClient) { }




  getAllClients():Promise<Client[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    headers.append('Content-Type', 'application/json');

      return this.http.get<Client[]>('http://localhost:8080/getAllClients', {headers}).toPromise();
  }





}
