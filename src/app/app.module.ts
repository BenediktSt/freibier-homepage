import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {HttpModule} from '@angular/http';

import {MaterialModule} from './material.module';
import {appRouts} from './routes';

import {AppComponent} from './app.component';
import {DudeAdminComponent} from './dude-admin/dude-admin.component';
import {HomeComponent} from './home/home.component';
import {SearchFieldComponent} from './search-field/search-field.component';
import {CardPrintingsComponent} from './card-printings/card-printings.component';
import {CardRatingComponent} from './card-rating/card-rating.component';
import {CardDetailsComponent} from './card-details/card-details.component';
import {CardSearchComponent} from './card-search/card-search.component';
import {StefanComponent} from './stefan/stefan.component';
import {LinkhubComponent} from './linkhub/linkhub.component';
import {PnpComponent} from './pnp/pnp.component';

@NgModule({
  declarations: [
    AppComponent,
    DudeAdminComponent,
    HomeComponent,
    SearchFieldComponent,
    CardRatingComponent,
    CardDetailsComponent,
    CardPrintingsComponent,
    StefanComponent,
    LinkhubComponent,
    CardSearchComponent,
    PnpComponent
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
