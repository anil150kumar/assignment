/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.signupUser = /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return console.log(error); }))
            .then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            console.log(res);
        }));
    };
    /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    AuthService.prototype.signinUser = /**
     * @param {?} email
     * @param {?} password
     * @return {?}
     */
    function (email, password) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            //console.log(response.user.uid)
            _this.router.navigate(['user/home/:' + response.user.email]);
            firebase.auth().currentUser.getIdToken()
                .then((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return _this.token = token; }));
        }))
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return console.log(error); }));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        firebase.auth().signOut();
        this.token = null;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        firebase.auth().currentUser.getIdToken()
            .then((/**
         * @param {?} token
         * @return {?}
         */
        function (token) { return _this.token = token; }));
        return this.token;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.isAuthenticated = /**
     * @return {?}
     */
    function () {
        return this.token != null;
    };
    AuthService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return AuthService;
}());
export { AuthService };
if (false) {
    /** @type {?} */
    AuthService.prototype.token;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdXNlci9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDO0lBSUUscUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7Ozs7O0lBRXRDLGdDQUFVOzs7OztJQUFWLFVBQVcsS0FBYSxFQUFFLFFBQWdCO1FBQ3hDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQzVELEtBQUs7Ozs7UUFDSixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQzVCO2FBQ0EsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxFQUFDLENBQUE7SUFDTixDQUFDOzs7Ozs7SUFFRCxnQ0FBVTs7Ozs7SUFBVixVQUFXLEtBQWEsRUFBRSxRQUFnQjtRQUExQyxpQkFlQztRQWRDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3hELElBQUk7Ozs7UUFDSCxVQUFBLFFBQVE7WUFDTixnQ0FBZ0M7WUFDaEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEdBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUNyQyxJQUFJOzs7O1lBQ0gsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDdEMsQ0FBQTtRQUNMLENBQUMsRUFDRjthQUNBLEtBQUs7Ozs7UUFDSixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLEVBQzVCLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsNEJBQU07OztJQUFOO1FBQ0UsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFO2FBQ3JDLElBQUk7Ozs7UUFDSCxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUN0QyxDQUFDO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxxQ0FBZTs7O0lBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQzVCLENBQUM7O2dCQWhERixVQUFVOzs7O2dCQUpGLE1BQU07O0lBcURmLGtCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FoRFksV0FBVzs7O0lBQ3RCLDRCQUFjOzs7OztJQUVGLDZCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHRva2VuOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBzaWdudXBVc2VyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAgIC5jYXRjaChcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICApXG4gICAgICAudGhlbihyZXM9PntcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgfSlcbiAgfVxuXG4gIHNpZ25pblVzZXIoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXG4gICAgICAudGhlbihcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UudXNlci51aWQpXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWyd1c2VyL2hvbWUvOicrIHJlc3BvbnNlLnVzZXIuZW1haWxdKTtcbiAgICAgICAgICBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZ2V0SWRUb2tlbigpXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgKHRva2VuOiBzdHJpbmcpID0+IHRoaXMudG9rZW4gPSB0b2tlblxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICAuY2F0Y2goXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpO1xuICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICB9XG5cbiAgZ2V0VG9rZW4oKSB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyLmdldElkVG9rZW4oKVxuICAgICAgLnRoZW4oXG4gICAgICAgICh0b2tlbjogc3RyaW5nKSA9PiB0aGlzLnRva2VuID0gdG9rZW5cbiAgICAgICk7XG4gICAgcmV0dXJuIHRoaXMudG9rZW47XG4gIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW4gIT0gbnVsbDtcbiAgfVxufVxuIl19