import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToBeProcessedPage } from './to-be-processed.page';

const routes: Routes = [
  {
    path: '',
    component: ToBeProcessedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToBeProcessedPageRoutingModule {}
