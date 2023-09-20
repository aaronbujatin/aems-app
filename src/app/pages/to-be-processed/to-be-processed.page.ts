import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';

@Component({
  selector: 'app-to-be-processed',
  templateUrl: './to-be-processed.page.html',
  styleUrls: ['./to-be-processed.page.scss'],
})
export class ToBeProcessedPage implements OnInit {

  constructor() {
    this.filteredBookings = this.bookings.filter(booking => booking.status === 'To be process');
   }

  ngOnInit() {
  }

  filteredBookings: any[];

  bookings : Booking[] = [
    {
      id : 1, 
      status: "To be process",
      vendorType : "Videographer"
    },
    {
      id : 2, 
      status: "To be process",
      vendorType : "Photographer"
    },
    {
      id : 3, 
      status: "Completed",
      vendorType : "Cermony"
    },
    {
      id : 4, 
      status: "Completed",
      vendorType : "Flowerist"
    },
    {
      id : 5, 
      status: "Completed",
      vendorType : "Catery"
    },
    {
      id : 6, 
      status: "To be process",
      vendorType : "Gown"
    }

  ]

}
