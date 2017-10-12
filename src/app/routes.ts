import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DudeAdminComponent } from "./dude-admin/dude-admin.component";

export const appRouts: Routes = [
    { path: 'home', component: AppComponent }, // Platzhalter für spätere Components
    { path: 'dudes', component: DudeAdminComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
  ];
