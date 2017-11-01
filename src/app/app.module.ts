import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { appRouts } from './routes';

import { AppComponent } from './app.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { HomeComponent } from './home/home.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { CardPrintingsComponent } from './card-printings/card-printings.component';
import { CardRatingComponent } from './card-rating/card-rating.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { StefanComponent } from './stefan/stefan.component';
import { LinkhubComponent } from './linkhub/linkhub.component';
import { TimeManagementComponent } from './time-management/time-management.component';
import { DashboardComponent } from './time-management/dashboard/dashboard.component';
import { ContingentComponent } from './time-management/contingent/contingent.component';
import { ContingentOverviewComponent } from './time-management/contingent/contingent-overview/contingent-overview.component';
import {ContingentEditorComponent} from './time-management/contingent/contingent-editor/contingent-editor.component';

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
      TimeManagementComponent,
      DashboardComponent,
      ContingentComponent,
      ContingentOverviewComponent,
      ContingentEditorComponent
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
