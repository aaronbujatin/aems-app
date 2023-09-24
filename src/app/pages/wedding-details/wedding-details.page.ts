import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-wedding-details',
  templateUrl: './wedding-details.page.html',
  styleUrls: ['./wedding-details.page.scss'],
})
export class WeddingDetailsPage implements OnInit {

  constructor(private bookingService : BookingService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => this.getVendorById(params['id']))

  }

  booking : Booking = new Booking

  public getVendorById(id : string){
    this.bookingService.getBookingById(id).subscribe(
      (response : Booking) => {
        this.booking = response
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }



}
