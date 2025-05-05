import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  {
    path: 'en',
    component: HomeComponent,
  },
  {
    path: 'fr',
    component: HomeComponent,
  },
  {
    path: 'en/users',
    component: UsersComponent,
  },
  {
    path: 'fr/users',
    component: UsersComponent,
  },
];
