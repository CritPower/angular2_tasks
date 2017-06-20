import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'main-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	public userLogin: string;
	public authService: AuthService;

	constructor(authService: AuthService) {
		this.authService = authService;
	}

	public ngOnInit() {
		console.log('HeaderComponent page init');
	}

	public logout() {
		this.authService.logout();
	}
}
