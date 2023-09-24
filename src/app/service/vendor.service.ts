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

  getAllVendor() {
    return this.httpClient.get(`${this.API_URL}/api/v1/vendors`)
  }


}