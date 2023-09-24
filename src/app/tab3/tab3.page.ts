import { Component } from '@angular/core';
import { VendorService } from '../service/vendor.service';
import { Vendor } from '../model/vendor.model';

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


  

  

}
