import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content';
import { CoursesComponent } from './pages/courses';
import { LoginPageComponent } from './pages/login';

export const ROUTES: Routes = [
	{ path: '', component: CoursesComponent },
	{ path: 'courses', component: CoursesComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'home', component: CoursesComponent },
	{ path: '**', component: NoContentComponent },
];
