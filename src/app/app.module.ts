import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DudeDetailsComponent } from './dude-details/dude-details.component';
import { NewDudeComponent } from './new-dude/new-dude.component';

@NgModule({
  declarations: [
    AppComponent,
    DudeDetailsComponent,
    NewDudeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
