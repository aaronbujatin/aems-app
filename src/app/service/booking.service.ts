import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient : HttpClient) { }

  private API_URL = environment.baseUrl
  private baseUrl = "http://localhost:8080"

  getAllBooking(){
    return this.httpClient.get(`${this.API_URL}/api/v1/bookings`)
  }

  public getBookingById(id : string){
    return this.httpClient.get(`${this.API_URL}/api/v1/bookings/${id}`)
  }

  getAllBookingByOrganizerName(organizerName : string){
    return this.httpClient.get(`${this.API_URL}/api/v1/bookings/organizer/${organizerName}`);
  }

  public saveBooking(booking){
    return this.httpClient.post(`${this.API_URL}/api/v1/bookings`, booking)
  }

}
