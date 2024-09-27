import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ResetComponent } from './Pages/reset/reset.component';
import { ForgetPasswordComponent } from './Pages/forget-password/forget-password.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forget-password',
        component:ForgetPasswordComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'reset/:token',
        component:ResetComponent
    },
];
