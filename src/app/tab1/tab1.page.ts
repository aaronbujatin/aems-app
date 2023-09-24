import { Component } from '@angular/core';
import { BookingService } from './../service/booking.service';
import { Booking } from '../model/booking.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private bookingService : BookingService) { }

  bookings : Booking[]

  ngOnInit(){
    this.bookingService.getAllBooking().subscribe(
      (response : Booking[]) => {
        this.bookings = response
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }


}
