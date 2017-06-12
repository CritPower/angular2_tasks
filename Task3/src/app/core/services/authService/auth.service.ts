export class AuthService {

    constructor(){
        
    }

    public login(login: string, password: string) {
        if (!localStorage.getItem('userLogin')) {
            localStorage.setItem('userLogin', login);
            localStorage.setItem('userToken', 'token');
        }
    }

    public logout() {
        localStorage.clear();
    }

    public isAuthenticated(): boolean {
        if (localStorage.getItem('userLogin') && localStorage.getItem('useToken')) {
            return true;
        } else {
            return false;
        }
    }

    public getUserInfo(): string {
        return localStorage.getItem('userLogin');
    }
}
