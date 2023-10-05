import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private httpClient: HttpClient) { }

  private API_URL = environment.baseUrl;

  private localUrl = "http://localhost:8080"

  public getAllGuest(){
    return this.httpClient.get(`${this.API_URL}/api/v1/guests/all`);
  }

  public getGuestsByStatus(status : string) {
    return this.httpClient.get(`${this.API_URL}/api/v1/guests?status=${status}`)
  }


}
