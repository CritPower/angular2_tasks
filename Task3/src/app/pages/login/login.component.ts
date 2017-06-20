import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services';

@Component({
	templateUrl: './login.component.html'
})

export class LoginPageComponent implements OnInit {

	public email: string;
	public password: string;
	public authService: AuthService;

	constructor(authService: AuthService) {
		this.authService = authService;
		this.email = 'asdf';
		this.password = 'asdf';
	}

	public ngOnInit() {
		console.log('Login page init.');
	}

	public login() {
		this.authService.login(this.email, this.password);
	}
}
