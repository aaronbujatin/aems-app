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


  public saveGuest(guest : Form) {
    return this.httpClient.post(`${this.API_URL}/api/v1/guests`, guest);
  }

  public seachGuestName(searchQuery : string){
    return this.httpClient.get(`${this.API_URL}/api/v1/guests?search=${searchQuery}`)
  }

  public getAllGuest(){
    return this.httpClient.get(`${this.API_URL}/api/v1/guests/all`);
  }

  public getGuestsByStatus(status : string) {
    return this.httpClient.get(`${this.API_URL}/api/v1/guests?status=${status}`)
  }


}
