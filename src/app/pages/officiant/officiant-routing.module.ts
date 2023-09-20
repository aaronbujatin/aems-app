import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfficiantPage } from './officiant.page';

const routes: Routes = [
  {
    path: '',
    component: OfficiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfficiantPageRoutingModule {}
