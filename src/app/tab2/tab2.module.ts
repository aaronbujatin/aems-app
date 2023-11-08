import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CustomTimeFormatPipe } from '../custom-time-format.pipe';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ReactiveFormsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  declarations: [Tab2Page, CustomTimeFormatPipe]
})
export class Tab2PageModule { }
