import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { NoContentComponent } from './pages/no-content';
import { CoursesComponent } from './pages/courses';

export const ROUTES: Routes = [
	{ path: '', component: CoursesComponent },
	{ path: 'home', component: CoursesComponent },
	{ path: '**', component: NoContentComponent },
];
