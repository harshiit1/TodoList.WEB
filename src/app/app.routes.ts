import { Routes } from '@angular/router';
import { Signin } from './authentication/signin/signin.component';
import { Signup } from './authentication/signup/signup.component';
import { PageNotFound } from './authentication/page-not-found/page-not-found.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guard/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'authentication/signin', pathMatch: 'full' },
  {
    path: 'authentication',
    children: [
      {
        path: 'signin',
        component: Signin,
      },
      {
        path: 'signup',
        component: Signup,
      },
    ],
  },
  {
    path: 'todo-app',
    component: MainLayoutComponent,
    // canActivate:[AuthGuard],
    children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { 
        path: 'dashboard', 
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent) 
      },
      { 
        path: 'tasks', 
        loadComponent: () => import('./pages/tasks.component/tasks.component').then(c => c.TasksComponent) 
      },
      { 
        path: 'profile', 
        loadComponent: () => import('./pages/projects/projects.component').then(c => c.ProjectsComponent) 
      },
      { 
        path: 'anmalytics', 
        loadComponent: () => import('./pages/analytics/analytics.component').then(c => c.AnalyticsComponent) 
      },
      { 
        path: 'settings', 
        loadComponent: () => import('./pages/settings/settings.component').then(c => c.SettingsComponent) 
      },
    ]
  },
];
