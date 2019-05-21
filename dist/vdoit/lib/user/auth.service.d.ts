import { Router } from '@angular/router';
export declare class AuthService {
    private router;
    token: string;
    constructor(router: Router);
    signupUser(email: string, password: string): void;
    signinUser(email: string, password: string): void;
    logout(): void;
    getToken(): string;
    isAuthenticated(): boolean;
}
