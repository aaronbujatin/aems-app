import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageVendorsPageRoutingModule } from './manage-vendors-routing.module';

import { ManageVendorsPage } from './manage-vendors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageVendorsPageRoutingModule
  ],
  declarations: [ManageVendorsPage]
})
export class ManageVendorsPageModule {}
