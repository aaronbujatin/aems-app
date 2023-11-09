import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private httpClient: HttpClient) { }
  private API_URL = environment.baseUrl
  private baseUrl = "http://localhost:8080";


  getAllVendor(organizerName : string) {
    return this.httpClient.get(`${this.baseUrl}/api/v1/vendors/event/${organizerName}`)
  }

  getVendorById(id:string){
    return this.httpClient.get(`${this.baseUrl}/api/v1/vendors/${id}`)
  }

  public saveVendor(vendor){
    return this.httpClient.post(`${this.baseUrl}/api/v1/vendors`, vendor)
  }

}
