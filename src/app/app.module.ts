import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CardPrintingsComponent } from './card-printings/card-printings.component';
import { CardRatingComponent } from './card-rating/card-rating.component';
import { CardDetailsComponent } from './card-details/card-details.component';
<<<<<<< HEAD
import {StefanComponent} from './stefan/stefan.component';
import { LinkhubComponent } from './linkhub/linkhub.component';
import { CardSearchComponent } from './card-search/card-search.component';
=======
import { StefanComponent } from './stefan/stefan.component';
<<<<<<< HEAD
>>>>>>> Implemented a class for magic cards so we have a clean interface for them. Also implemented a cardParser that parses the json given from the api and returns a list of MagicCards
=======
import { CardSearchComponent } from './card-search/card-search.component';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Decoupled card search from card details. Search now is able to discern if a given card name refers to a specific card
=======
import { LinkhubComponent } from './linkhub/linkhub.component';
>>>>>>> Rebase 4/6
=======
import { LinkhubComponent } from './linkhub/linkhub.component';
>>>>>>> merge conflict

@NgModule({
  declarations: [
      AppComponent,
      DudeAdminComponent,
      HomeComponent,
      SearchFieldComponent,
      CardRatingComponent,
      CardDetailsComponent,
      CardPrintingsComponent,
<<<<<<< HEAD
      StefanComponent,
<<<<<<< HEAD
      LinkhubComponent,
      CardSearchComponent
=======
      CardSearchComponent,
<<<<<<< HEAD
      StefanComponent
>>>>>>> Decoupled card search from card details. Search now is able to discern if a given card name refers to a specific card
=======
      StefanComponent,
      LinkhubComponent
>>>>>>> Rebase 4/6
=======
      LinkhubComponent
>>>>>>> merge conflict
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
