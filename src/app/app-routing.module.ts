import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPageModule } from './pages/login/login.module';

const routes: Routes = [
  { path: '', redirectTo : 'login', pathMatch : 'full'},
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'wedding-details',
    loadChildren: () => import('./pages/wedding-details/wedding-details.module').then(m => m.WeddingDetailsPageModule)
  },
  {
    path: 'wedding-details',
    loadChildren: () => import('./pages/wedding-details/wedding-details.module').then( m => m.WeddingDetailsPageModule)
  },
  {
    path: 'to-be-processed',
    loadChildren: () => import('./pages/to-be-processed/to-be-processed.module').then( m => m.ToBeProcessedPageModule)
  },
  {
    path: 'compeleted',
    loadChildren: () => import('./pages/compeleted/compeleted.module').then( m => m.CompeletedPageModule)
  },
  {
    path: 'manage-vendors',
    loadChildren: () => import('./pages/manage-vendors/manage-vendors.module').then( m => m.ManageVendorsPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
