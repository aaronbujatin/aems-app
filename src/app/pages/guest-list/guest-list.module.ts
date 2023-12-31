import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestListPageRoutingModule } from './guest-list-routing.module';

import { GuestListPage } from './guest-list.page';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GuestListPageRoutingModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [GuestListPage]
})
export class GuestListPageModule {}
