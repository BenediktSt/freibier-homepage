import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
  MdFormFieldModule,
  MdInputModule,
  MdExpansionModule,
  MdCardModule,
  MdTabsModule,
  MdSlideToggleModule,
  MdProgressBarModule
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
    MdExpansionModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdProgressBarModule
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
    MdExpansionModule,
    MdTabsModule,
    MdSlideToggleModule,
    MdProgressBarModule
  ],
})
export class MaterialModule {
}
