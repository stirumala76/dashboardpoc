import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DashboardComponent}  from '../dashboard/dashboard.component';
import {AdminComponent} from '../admin/admin.component';
//import {AppComponent} from '../app.component';

export const routes: Routes = [
  //{ path: '', component: AppComponent,pathMatch:'full' },
  { path: 'admin', component: AdminComponent},
  { path: 'dashboard', component: DashboardComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule { }
