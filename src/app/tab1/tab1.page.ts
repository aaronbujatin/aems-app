import { Component } from '@angular/core';
import { BookingService } from './../service/booking.service';
import { Booking } from '../model/booking.model';
import { AuthenticationServiceService } from 'src/app/service/authentication-service.service';
import { AlertController, IonicSafeString } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../model/user.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  userImage: string;

  constructor(private bookingService: BookingService, private authenticationService: AuthenticationServiceService, private alertController: AlertController, private domSanitizer: DomSanitizer) {
    this.userImage = "https://storage.ko-fi.com/cdn/useruploads/post/39d7fa2f-9353-4cb1-91f9-7c5c1c2d4f61_0f217d0189f841ae794500966ab1845a.jpg"
   }

  bookings: Booking[]

  ngOnInit() {
    this.getBookingByOrganizerName()
    this.getUserByUsername()
  }

  username: string
  image : string

  public getBookingByOrganizerName() {
    this.username = localStorage.getItem("loggedInUsername");
    this.bookingService.getAllBookingByOrganizerName(this.username).subscribe(
      (response: Booking[]) => {
        this.bookings = response
        console.log(response);
      }, (error) => {
        console.log(error);

      }
    )
  }

  // ionViewDidEnter() {
  //   this.presentGreetingAlert();
  // }

  organizerName =  "lovely"

  // async presentGreetingAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Welcome',
  //     message: new IonicSafeString(`<div style="display: flex; justify-content: flex-start; align-items: start;">
  //     <img  src="https://scontent.fmnl8-1.fna.fbcdn.net/v/t1.18169-9/11109194_1628560804025605_8229020917826853397_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeGXNMznDkyG852gPNTE36KxR3NYCBuSRcRHc1gIG5JFxGJf-SCZwlZ05gJCjczEokx6OpmjXa4AKBrlESIEMLox&_nc_ohc=zGaVDiYP8zcAX9Kfj7v&_nc_ht=scontent.fmnl8-1.fna&oh=00_AfC4bsVS7zEFnB63GQyy_BXTYx-Z1KFxsGeST8gShwWVNA&oe=6597C511" style="width:20%; border-radius:50%"/>
  //      <h5 style="margin-top:1rem; padding-left:3px;">Organizer ${this.organizerName}!</h5>
  //   </div>`),
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: () => {
  //           console.log('Alert confirmed');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }

  getUserByUsername(){
    const username = localStorage.getItem("loggedInUsername")
    this.authenticationService.getUserByUsername(username).subscribe(
      (response : User) => {
        this.username = response.username
        this.image = response.image
        console.log(response);
        
      }, (error) => {
        console.log(error);
        
      }
    )
  }

  





}
