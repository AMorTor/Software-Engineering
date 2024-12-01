import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated/authenticated.guard';
import { hasRoleGuard } from './core/guards/role/has-role.guard';

export const routes: Routes = [
  {
    path: "dashboard",
    title: "Dashboard Page",
    loadComponent: () => import("./dashboard/dashboard.component"),
    canActivate: [],
    children: [
      {
        path: "home",
        title: "Home",
        loadComponent: () => import("./dashboard/pages/home/home.component")
      },
      {
        path: 'users',
        title: 'Users',
        canActivate: [hasRoleGuard],
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'users/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: "signin",
    title: "Sign In",
    canActivate: [AuthenticatedGuard],
    loadComponent: () => import("./auth/signin/signin.component"),
  },
  {
    path: "signup",
    title: "Sign Up",
    loadComponent: () => import("./auth/signup/signup.component"),
  },
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",

  }
];
