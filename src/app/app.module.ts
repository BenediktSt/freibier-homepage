import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { ShowPrintingsComponent } from './show-printings/show-printings.component';
import { CardRatingComponent } from './card-rating/card-rating.component';

@NgModule({
  declarations: [
      AppComponent,
      DudeAdminComponent,
<<<<<<< HEAD
      HomeComponent
=======
      HomeComponent,
      CardSearchComponent,
      ShowPrintingsComponent,
      CardRatingComponent
>>>>>>> Updated to newest angular version for angular materials
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
