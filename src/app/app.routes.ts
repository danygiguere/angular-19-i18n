import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/en', pathMatch: 'full' },
  {
    path: 'en',
    component: HomeComponent,
    data: { lang: 'en' },
  },
  {
    path: 'fr',
    component: HomeComponent,
    data: { lang: 'fr' },
  },
  {
    path: 'en/users',
    component: UsersComponent,
    data: { lang: 'en' },
  },
  {
    path: 'fr/users',
    component: UsersComponent,
    data: { lang: 'fr' },
  },
];
