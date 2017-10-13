import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
      AppComponent,
      DudeAdminComponent,
      HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
