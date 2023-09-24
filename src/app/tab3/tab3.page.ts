import { Component } from '@angular/core';
import { VendorService } from '../service/vendor.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private vendorService : VendorService) {}

  ngOnInit(){
    this.vendorService.getAllVendor().subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
        
      }
    )
  }


  time : string

  

}
