import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageVendorsPage } from './manage-vendors.page';

const routes: Routes = [
  {
    path: '',
    component: ManageVendorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageVendorsPageRoutingModule {}
