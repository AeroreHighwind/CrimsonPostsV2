import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';

export const routes: Routes = [
    { path: "auth", children: authRoutes }
];
