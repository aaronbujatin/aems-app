import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {

  constructor(private  vendorService : VendorService, private activedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.activedRoute.params.subscribe(params => this.getVendorById(params['id']))
  }

  vendor : Vendor = new Vendor

  public getVendorById(id : string) {
    this.vendorService.getVendorById(id).subscribe(
      (response : Vendor) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

}
