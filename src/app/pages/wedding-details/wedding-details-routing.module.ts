import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingDetailsPage } from './wedding-details.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingDetailsPageRoutingModule {}
