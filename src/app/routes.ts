import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';

export const appRouts: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dudes', component: DudeAdminComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
