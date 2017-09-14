import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

export const appRouts: Routes = [
    {path: 'home', component: AppComponent}, // Platzhalter für spätere Components
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
  ];
