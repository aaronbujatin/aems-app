import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatererPage } from './caterer.page';

const routes: Routes = [
  {
    path: '',
    component: CatererPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatererPageRoutingModule {}
