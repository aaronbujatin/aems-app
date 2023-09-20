import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfficiantPageRoutingModule } from './officiant-routing.module';

import { OfficiantPage } from './officiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfficiantPageRoutingModule
  ],
  declarations: [OfficiantPage]
})
export class OfficiantPageModule {}
