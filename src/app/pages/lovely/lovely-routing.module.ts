import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LovelyPage } from './lovely.page';

const routes: Routes = [
  {
    path: '',
    component: LovelyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LovelyPageRoutingModule {}
