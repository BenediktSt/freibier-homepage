import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { StefanComponent } from './stefan/stefan.component';

export const appRouts: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dudes', component: DudeAdminComponent },
    { path: 'stefan', component: StefanComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
