import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingDetailsPageRoutingModule } from './wedding-details-routing.module';

import { WeddingDetailsPage } from './wedding-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingDetailsPageRoutingModule
  ],
  declarations: [WeddingDetailsPage]
})
export class WeddingDetailsPageModule {}
