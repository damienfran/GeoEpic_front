import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../app/Models/Client';
import { Config } from './Models/Config';
import { Location } from './Models/Location';
import { Item } from './Models/Item';

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

    return this.http.post<Client>(`${Config.server}/login`, c, {headers}).toPromise();
  }

  createClient(c:Client):Promise<Client>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');

    return this.http.post<Client>(`${Config.server}/createClient`, c, {headers}).toPromise();

  }


  getLocationById(L:Location):Promise<Location>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');

    return this.http.post<Location>(`${Config.server}/getLocationById`, L, {headers}).toPromise();
  }

  getAllLocations():Promise<Location[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.get<Location[]>(`${Config.server}/getAllLocations`,{headers}).toPromise();
  }

  getItemsForLocation(L:Location):Promise<Item[]>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Item[]>(`${Config.server}/getItemsForLocation`, L,{headers}).toPromise();
  }

  getItemsForClient(C:Client):Promise<Item[]>{

    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Item[]>(`${Config.server}/getItemsForClient`, C,{headers}).toPromise();
  

  }

  getItemById(I:Item):Promise<Item>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Item>(`${Config.server}/getItemById`, I, {headers}).toPromise();
  }

  updateItem(I:Item):Promise<Item>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Item>(`${Config.server}/updateItem`, I, {headers}).toPromise();
  }

  getClientById(C:Client):Promise<Client>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Client>(`${Config.server}/getClientById`, C,{headers}).toPromise();

  }

  updateClient(C:Client):Promise<Client>{

    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Vary', "Origin");
    headers.append('Vary', "Access-Control-Request-Method");
    headers.append('Vary',"Access-Control-Request-Headers");
    
    headers.append('Content-Type', 'application/json');
    return this.http.post<Client>(`${Config.server}/updateClient`, C,{headers}).toPromise();

  }


}
