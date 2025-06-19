import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { PostsCreateComponent } from './features/posts/posts-create/posts-create.component';
import { PostsIndexComponent } from './features/posts/posts-index/posts-index.component';
import en from '../../public/assets/i18n/en.json';
import fr from '../../public/assets/i18n/fr.json';

export const routes: Routes = [
  { path: '', redirectTo: en.routes.home.replace(/^\//, ''), pathMatch: 'full' },
  { path: en.routes.home.replace(/^\//, ''), component: HomeComponent },
  { path: fr.routes.home.replace(/^\//, ''), component: HomeComponent },
  { path: en.routes.users.replace(/^\//, ''), component: UsersComponent },
  { path: fr.routes.users.replace(/^\//, ''), component: UsersComponent },
  { path: en.routes['sign-in'].replace(/^\//, ''), component: SignInComponent },
  { path: fr.routes['sign-in'].replace(/^\//, ''), component: SignInComponent },
  { path: en.routes['sign-up'].replace(/^\//, ''), component: SignUpComponent },
  { path: fr.routes['sign-up'].replace(/^\//, ''), component: SignUpComponent },
  { path: en.routes.posts.replace(/^\//, ''), component: PostsIndexComponent },
  { path: fr.routes.posts.replace(/^\//, ''), component: PostsIndexComponent },
  { path: en.routes['posts-create'].replace(/^\//, ''), component: PostsCreateComponent },
  { path: fr.routes['posts-create'].replace(/^\//, ''), component: PostsCreateComponent },
  { path: '**', component: PageNotFoundComponent },
];
