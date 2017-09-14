import { NgModule } from '@angular/core';
import {
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule
    ],
    exports: [
        MdButtonModule,
        MdToolbarModule,
        MdIconModule
    ],
  })
  export class MaterialModule { }
