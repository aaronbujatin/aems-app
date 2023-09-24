import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking.model';

@Component({
  selector: 'app-to-be-processed',
  templateUrl: './to-be-processed.page.html',
  styleUrls: ['./to-be-processed.page.scss'],
})
export class ToBeProcessedPage implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

  filteredBookings: any[];



}
