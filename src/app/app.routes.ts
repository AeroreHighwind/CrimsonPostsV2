import { Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { Page404Component } from './modules/shared/pages/page404/page404.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
export const routes: Routes = [

    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes),
        canActivate: [AuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome },
    },
    {
        path: 'home',
        component: Page404Component
        // loadComponent: ()=> import('./modules/shared/pages/page404').then(m => m.Page404Component),
        // loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes),
        // canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'auth' }
];
