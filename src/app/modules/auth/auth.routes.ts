import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', loadComponent:
            () => import("./pages/login-page/login-page.component").then(m => m.LoginPageComponent)
    },
    {
        path: 'sign-up', loadComponent:
            () => import("./pages/register-page/register-page.component").then(m => m.RegisterPageComponent)
    },
    { path: '**', redirectTo: 'login' }
];
