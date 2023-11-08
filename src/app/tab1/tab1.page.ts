import { Component } from '@angular/core';
import { BookingService } from './../service/booking.service';
import { Booking } from '../model/booking.model';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private bookingService : BookingService, private authenticationService : AuthenticationServiceService) { }

  bookings : Booking[]

  ngOnInit(){
    this.getBookingByOrganizerName()
  }

  username : string

  public getBookingByOrganizerName(){
   this.username = localStorage.getItem("loggedInUsername");
   this.bookingService.getAllBookingByOrganizerName(this.username).subscribe(
    (response : Booking[]) => {
      this.bookings = response
      console.log(response);
    }, (error) => {
      console.log(error);
      
    }
   )
  }


}
