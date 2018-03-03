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
  MdProgressBarModule, MdDatepickerModule, MdNativeDateModule, MdSnackBarModule
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
    MdProgressBarModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSnackBarModule
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
    MdProgressBarModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSnackBarModule
  ],
})
export class MaterialModule {
}
