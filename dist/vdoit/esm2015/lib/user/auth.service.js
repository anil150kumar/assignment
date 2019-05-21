/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
export class AuthService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    signupUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        error => console.log(error)))
            .then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            console.log(res);
        }));
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    signinUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            //console.log(response.user.uid)
            this.router.navigate(['user/home/:' + response.user.email]);
            firebase.auth().currentUser.getIdToken()
                .then((/**
             * @param {?} token
             * @return {?}
             */
            (token) => this.token = token));
        }))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        error => console.log(error)));
    }
    /**
     * @return {?}
     */
    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
    /**
     * @return {?}
     */
    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then((/**
         * @param {?} token
         * @return {?}
         */
        (token) => this.token = token));
        return this.token;
    }
    /**
     * @return {?}
     */
    isAuthenticated() {
        return this.token != null;
    }
}
AuthService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /** @type {?} */
    AuthService.prototype.token;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdXNlci9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxXQUFXOzs7O0lBR3RCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7Ozs7O0lBRXRDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBZ0I7UUFDeEMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDNUQsS0FBSzs7OztRQUNKLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFDNUI7YUFDQSxJQUFJOzs7O1FBQUMsR0FBRyxDQUFBLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLENBQUMsRUFBQyxDQUFBO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUN4QyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQzthQUN4RCxJQUFJOzs7O1FBQ0gsUUFBUSxDQUFDLEVBQUU7WUFDVCxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEdBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUNyQyxJQUFJOzs7O1lBQ0gsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUN0QyxDQUFBO1FBQ0wsQ0FBQyxFQUNGO2FBQ0EsS0FBSzs7OztRQUNKLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFDNUIsQ0FBQztJQUNOLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDckMsSUFBSTs7OztRQUNILENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFDdEMsQ0FBQztRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7O1lBaERGLFVBQVU7Ozs7WUFKRixNQUFNOzs7O0lBTWIsNEJBQWM7Ozs7O0lBRUYsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgdG9rZW46IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHNpZ251cFVzZXIoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLmNhdGNoKFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIClcbiAgICAgIC50aGVuKHJlcz0+e1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICB9KVxuICB9XG5cbiAgc2lnbmluVXNlcihlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC50aGVuKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS51c2VyLnVpZClcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ3VzZXIvaG9tZS86JysgcmVzcG9uc2UudXNlci5lbWFpbF0pO1xuICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKClcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAodG9rZW46IHN0cmluZykgPT4gdGhpcy50b2tlbiA9IHRva2VuXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5jYXRjaChcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgbG9nb3V0KCkge1xuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XG4gICAgdGhpcy50b2tlbiA9IG51bGw7XG4gIH1cblxuICBnZXRUb2tlbigpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlbigpXG4gICAgICAudGhlbihcbiAgICAgICAgKHRva2VuOiBzdHJpbmcpID0+IHRoaXMudG9rZW4gPSB0b2tlblxuICAgICAgKTtcbiAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbiAhPSBudWxsO1xuICB9XG59XG4iXX0=