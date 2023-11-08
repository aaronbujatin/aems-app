import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorDetailsPageRoutingModule } from './vendor-details-routing.module';

import { VendorDetailsPage } from './vendor-details.page';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorDetailsPageRoutingModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [VendorDetailsPage]
})
export class VendorDetailsPageModule {}
