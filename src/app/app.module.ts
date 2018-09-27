import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import {AppRoutingModuleModule} from '../app/app-routing-module/app-routing-module.module';
import {DashboardModule}  from '../app/dashboard/dashboard.module';
import {AdminModule}  from '../app/admin/admin.module';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModuleModule,
    DashboardModule,
    AdminModule,    
    NbThemeModule.forRoot({ name: 'cosmic' }), // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
