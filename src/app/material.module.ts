import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
  MdExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdExpansionModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdExpansionModule
  ],
})
export class MaterialModule {
}
