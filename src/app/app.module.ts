import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
      AppComponent,
      DudeAdminComponent,
      HomeComponent
=======
import { CardSearchComponent } from './card-search.component';
import { ShowPrintingsComponent } from './show-printings.component'

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CardSearchComponent
>>>>>>> Working on search field for card names.
=======
    CardSearchComponent,
    ShowPrintingsComponent
>>>>>>> Search bar advanced
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
