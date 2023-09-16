import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToBeProcessedPageRoutingModule } from './to-be-processed-routing.module';

import { ToBeProcessedPage } from './to-be-processed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToBeProcessedPageRoutingModule
  ],
  declarations: [ToBeProcessedPage]
})
export class ToBeProcessedPageModule {}
