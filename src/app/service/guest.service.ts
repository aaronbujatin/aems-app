import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  private API_URL = environment.baseUrl;

  private localUrl = "http://localhost:8080"

  eventNameReference : string;
  

  public saveGuest(guest: Form) {
    return this.httpClient.post(`${this.localUrl}/api/v1/guests`, guest);
  }

  public getAllGuestByEventName(eventName : string){
    return this.httpClient.get(`${this.localUrl}/api/v1/guests/event?eventName=${eventName}`)
  }

  public getAllGuestByEventNameAndStatus(eventName : string, status : string){
    return this.httpClient.get(`${this.localUrl}/api/v1/guests/filter?eventName=${eventName}&status=${status}`)
  }

  public getSearchByEventNameAndFirstNameOrLastName(eventName : string, searchQuery : string){
    return this.httpClient.get(`${this.localUrl}/api/v1/guests/search?eventName=${eventName}&searchQuery=${searchQuery}`)
  }





}
