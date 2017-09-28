import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { HttpModule } from '@angular/http';
=======
>>>>>>> Working on search field for card names.

import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';
import { CardSearchComponent } from './card-search.component';

@NgModule({
  declarations: [
      AppComponent,
      DudeAdminComponent,
<<<<<<< HEAD
      HomeComponent
=======
import { CardSearchComponent } from './card-search.component';
import { ShowPrintingsComponent } from './show-printings.component'
=======
import { CardSearchComponent } from './card-search/card-search.component';
<<<<<<< HEAD
import { ShowPrintingsComponent } from './show-printings/show-printings.component';
<<<<<<< HEAD
>>>>>>> Added folder structure and fixed styling errors
=======
import { CardRatingComponent } from './card-rating/card-rating.component';
>>>>>>> Updated to newest angular version for angular materials
=======
import { CardPrintingsComponent } from './card-printings/card-printings.component';
import { CardRatingComponent } from './card-rating/card-rating.component';
import { CardDetailsComponent } from './card-details/card-details.component';
>>>>>>> refactored and added card rating

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CardSearchComponent
>>>>>>> Working on search field for card names.
=======
    CardSearchComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ShowPrintingsComponent
>>>>>>> Search bar advanced
=======
    ShowPrintingsComponent,
    CardRatingComponent
>>>>>>> Updated to newest angular version for angular materials
=======
    CardPrintingsComponent,
    CardRatingComponent,
    CardDetailsComponent
>>>>>>> refactored and added card rating
=======
      HomeComponent,
      CardSearchComponent
>>>>>>> Working on search field for card names.
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    MaterialModule,
<<<<<<< HEAD
<<<<<<< HEAD
    HttpModule,
    FormsModule
=======
    HttpModule
>>>>>>> Elvish mystic component
=======
    HttpModule,
    FormsModule
>>>>>>> Working on search field for card names.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
