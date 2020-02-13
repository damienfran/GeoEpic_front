import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../app/Models/Client';
import { Config } from './Models/Config';

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

    return this.http.get<Client[]>(`${Config.server}/getAllClients`, {headers}).toPromise();

  }

  login(c:Client):Promise<Client>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');

    return this.http.post<Client>('http://localhost:8080/login', c, {headers}).toPromise();
  }



}
