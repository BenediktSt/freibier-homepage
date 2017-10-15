import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdFormFieldModule,
    MdInputModule,
    MdExpansionModule,
    MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdFormFieldModule,
    MdInputModule,
    MdCardModule,
    MdExpansionModule
  ],
  exports: [
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    BrowserAnimationsModule,
    MdFormFieldModule,
    MdInputModule,
    MdCardModule,
    MdExpansionModule
  ],
})
export class MaterialModule {
}
