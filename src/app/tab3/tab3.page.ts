import { Component, ViewChild } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Vendor } from '../model/vendor.model';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private vendorService : VendorService) {}

  vendors : Vendor[];

  ngOnInit(){
    this.vendorService.getAllVendor().subscribe(
      (response : Vendor[]) => {
        this.vendors = response
        console.log(response);
      }, (error) => {
        console.log(error);
        
      }
    )
  }

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  

  

}
