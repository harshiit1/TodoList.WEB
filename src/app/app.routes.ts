import { Routes } from '@angular/router';
import { Signin } from './authentication/signin/signin.component';
import { Signup } from './authentication/signup/signup.component';
import { PageNotFound } from './authentication/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'signin',
    component: Signin,
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: Signup,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
