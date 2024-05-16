import { Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const authRoutes: Routes = [
    {
        path: 'sign-up', loadComponent:
            () => import("./pages/register-page/register-page.component").then((mod) => mod.RegisterPageComponent)
    },
    { path: "**", redirectTo: "sign-up" }
];
