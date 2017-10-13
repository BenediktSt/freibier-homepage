import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdSidenavModule,
        BrowserAnimationsModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule,
        MdSidenavModule,
        BrowserAnimationsModule
    ],
  })
  export class MaterialModule { }
