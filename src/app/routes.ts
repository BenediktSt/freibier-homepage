import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DudeAdminComponent } from './dude-admin/dude-admin.component';
import { StefanComponent } from './stefan/stefan.component';
import { LinkhubComponent } from './linkhub/linkhub.component';
import {TimeManagementComponent} from './time-management/time-management.component';
import {DashboardComponent} from './time-management/dashboard/dashboard.component';
import {ContingentComponent} from './time-management/contingent/contingent.component';

export const appRouts: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dudes', component: DudeAdminComponent },
    { path: 'stefan', component: StefanComponent },
    { path: 'linkhub', component: LinkhubComponent },
    { path: 'time-management', component: TimeManagementComponent,
      children: [
        {path: 'dashboard', component: DashboardComponent},
        {path: 'contingents', component: ContingentComponent}
      ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
  ];
