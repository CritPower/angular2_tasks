export class AuthService {

	constructor() {

	}

	public login(login: string, password: string) {
		if (localStorage.getItem('userLogin') == null) {
			localStorage.setItem('userLogin', login);
			localStorage.setItem('userToken', 'token');
			console.log('User logged. userLogin: ' + login + ' token:token');
		} else {
			console.log('User already logged.');
		}
	}

	public logout() {
		localStorage.clear();
	}

	public isAuthenticated(): boolean {
		if (localStorage.getItem('userLogin') != null
			&& localStorage.getItem('userToken') != null) {
			console.log('isAuthenticated - true');
			return true;
		} else {
			console.log('isAuthenticated - false');
			return false;
		}
	}

	public getUserInfo(): string {
		return localStorage.getItem('userLogin');
	}
}
