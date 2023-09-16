import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompeletedPage } from './compeleted.page';

const routes: Routes = [
  {
    path: '',
    component: CompeletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompeletedPageRoutingModule {}
