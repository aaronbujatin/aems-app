import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/model/booking.model';
import { BookingService } from 'src/app/service/booking.service';
import { PdfGenerationService } from 'src/app/service/pdf-generation.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { LoadingController } from '@ionic/angular';
import { GuestService } from 'src/app/service/guest.service';
declare var window;
@Component({
  selector: 'app-wedding-details',
  templateUrl: './wedding-details.page.html',
  styleUrls: ['./wedding-details.page.scss'],
})
export class WeddingDetailsPage implements OnInit {

  constructor(private bookingService: BookingService,
    private activatedRoute: ActivatedRoute,
    private pdfGeneration: PdfGenerationService,
    private inAppBrowser: InAppBrowser,
    private loader : LoadingController,
    private router : Router,
    private guestService : GuestService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>
      this.weddingEventId = params['id']
    )

    this.getBookingById(this.weddingEventId)

  }

  weddingEventId: string


  booking: Booking = new Booking

  public getBookingById(id: string) {
    this.bookingService.getBookingById(id).subscribe(
      (response: Booking) => {
        this.booking = response
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

  pdfSrc: string = '';
  
  viewPdfContract() {

    const pdfUrlLocal = "http://localhost:8080/api/v1/generate/view/" + this.weddingEventId
    const pdfUrl = "https://be-aems-production.up.railway.app/api/v1/generate/view/" + this.weddingEventId

    const browser = this.inAppBrowser.create(pdfUrl, '_blank');
    // this.pdfGeneration.generatePdf(this.weddingEventId).subscribe(
    //   (response : string) => {
    //     const browser = this.inAppBrowser.create(pdfUrl, '_blank');
    //   }, (error) => {
    //     console.log(error);
    //   }
    // )
  }

  getEventName(eventName : string){
    this.guestService.eventNameReference = eventName;
  }

  viewPdf(){

    const url = "http://localhost:8080/api/v1/generate/view/" + this.weddingEventId
    this.loader.create({
      
      duration : 3000,
      message : "Opening pdf..."
    }).then ((ele) => {
      ele.present();
      window.PreviewAnyFile.previewPath(
        succes => {
            ele.dismiss()
        }, error => {
            ele.dismiss()
            alert(JSON.stringify(error));
        },
        url
      )
    })
  }

}
