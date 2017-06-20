import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent }    from './login.component';

// Route Configuration
const loginRoutes: Routes = [
	{ path: 'login', component: LoginPageComponent },
];

export const routes = RouterModule.forChild(loginRoutes);
