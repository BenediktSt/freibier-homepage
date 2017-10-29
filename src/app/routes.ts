import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { StefanComponent } from './stefan/stefan.component';
import { LinkhubComponent } from './linkhub/linkhub.component';

export const appRouts: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dudes', component: DudeAdminComponent },
    { path: 'stefan', component: StefanComponent },
    { path: 'linkhub', component: LinkhubComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
