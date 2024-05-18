import { Routes } from '@angular/router';

export const routes: Routes = [
    //Temporal until main view implemented
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.authRoutes)
    },
    { path: '**', redirectTo: 'auth' }
];
