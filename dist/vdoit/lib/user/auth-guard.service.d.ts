import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
export declare class AuthGuard implements CanActivate {
    private authService;
    constructor(authService: AuthService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}