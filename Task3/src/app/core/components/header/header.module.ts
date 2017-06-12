import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [HeaderComponent, LoginComponent],
	imports: [RouterModule, CommonModule, BrowserModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
	constructor() {
	}
}
