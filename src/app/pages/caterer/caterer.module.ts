import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatererPageRoutingModule } from './caterer-routing.module';

import { CatererPage } from './caterer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatererPageRoutingModule
  ],
  declarations: [CatererPage]
})
export class CatererPageModule {}
