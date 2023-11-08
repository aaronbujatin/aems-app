import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfViewPagePageRoutingModule } from './pdf-view-page-routing.module';

import { PdfViewPagePage } from './pdf-view-page.page';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewPagePageRoutingModule,
    NgHttpLoaderModule.forRoot()
  ],
  declarations: [PdfViewPagePage]
})
export class PdfViewPagePageModule {}
