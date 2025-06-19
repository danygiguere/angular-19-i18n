import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { PostsCreateComponent } from './features/posts/posts-create/posts-create.component';
import { PostsIndexComponent } from './features/posts/posts-index/posts-index.component';

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
  {
    path: 'en/posts',
    component: PostsIndexComponent,
  },
  {
    path: 'fr/posts',
    component: PostsIndexComponent,
  },
  {
    path: 'en/posts/create',
    component: PostsCreateComponent,
  },
  {
    path: 'fr/posts/creer',
    component: PostsCreateComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
