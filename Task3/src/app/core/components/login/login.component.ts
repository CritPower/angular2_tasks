import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
	selector: 'main-login',
	templateUrl: './login.component.html',
})
export class LoginComponent {
	public isAuthenticated: boolean = false;
	public userLogin: string;

	constructor(private authService: AuthService) {

	}

	public ngOnInit() {
		console.log('HeaderComponent page init');
		this.isAuthenticated = this.authService.isAuthenticated();
	}

	public logout() {
		this.authService.logout();
	}
}

