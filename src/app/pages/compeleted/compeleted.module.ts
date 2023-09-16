import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompeletedPageRoutingModule } from './compeleted-routing.module';

import { CompeletedPage } from './compeleted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompeletedPageRoutingModule
  ],
  declarations: [CompeletedPage]
})
export class CompeletedPageModule {}
