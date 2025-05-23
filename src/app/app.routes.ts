import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
    path: 'fr/utilisateurs',
    component: UsersComponent,
  },
  {
    path: 'en/sign-in',
    component: SignInComponent,
  },
  {
    path: 'fr/se-connecter',
    component: SignInComponent,
  },
  {
    path: 'en/sign-up',
    component: SignUpComponent,
  },
  {
    path: 'fr/sinscrire',
    component: SignUpComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
