/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(form, auth) {
        this.form = form;
        this.auth = auth;
    }
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.signinForm = this.form.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var email = this.signinForm.value.email;
        /** @type {?} */
        var password = this.signinForm.value.password;
        this.auth.signinUser(email, password);
        console.log(firebase.auth().currentUser.email);
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'enl-login',
                    template: "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Sign In</h5>\n          <form class=\"form-signin\" [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-label-group\"><span>Your Email</span>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\"  formControlName=\"email\" required autofocus>\n              \n            </div>\n\n            <div class=\"form-label-group\">\n              <span>Passwords</span>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n              \n            </div>\n\n        \n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\n            <hr class=\"my-4\">\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [":root{--input-padding-x:1.5rem;--input-padding-y:.75rem}body{background:#007bff;background:linear-gradient(to right,#0062e6,#33aeff)}.card-signin{border:0;border-radius:1rem;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1)}.card-signin .card-title{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin .card-body{padding:2rem}.form-signin{width:100%}.form-signin .btn{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:.2s}.form-label-group{position:relative;margin-bottom:1rem}.form-label-group input{height:auto;border-radius:2rem}.form-label-group>input,.form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:.1s ease-in-out}.form-label-group input::-webkit-input-placeholder{color:transparent}.form-label-group input:-ms-input-placeholder{color:transparent}.form-label-group input::-ms-input-placeholder{color:transparent}.form-label-group input::-moz-placeholder{color:transparent}.form-label-group input::placeholder{color:transparent}.form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y)/ 3)}.form-label-group input:not(:placeholder-shown)~label{padding-top:calc(var(--input-padding-y)/ 3);padding-bottom:calc(var(--input-padding-y)/ 3);font-size:12px;color:#777}.btn-google{color:#fff;background-color:#ea4335}.btn-facebook{color:#fff;background-color:#3b5998}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AuthService }
    ]; };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.signinForm;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.auth;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFZLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUE7QUFHcEM7SUFPRSx3QkFBb0IsSUFBa0IsRUFBUyxJQUFnQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFjO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7SUFFcEUsaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNoQyxLQUFLLEVBQUMsQ0FBQyxFQUFFLEVBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUM5QixRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUE7SUFFSixDQUFDOzs7O0lBQ0QsaUNBQVE7OztJQUFSOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLOztZQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hELENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHVqQ0FBcUM7O2lCQUV0Qzs7OztnQkFUa0IsV0FBVztnQkFDckIsV0FBVzs7SUE0QnBCLHFCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FuQlksY0FBYzs7O0lBQzNCLG9DQUFzQjs7Ozs7SUFDUiw4QkFBMEI7Ozs7O0lBQUMsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCxGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbnNpZ25pbkZvcm0gOiBGb3JtR3JvdXBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtIDogRm9ybUJ1aWxkZXIscHJpdmF0ZSBhdXRoOkF1dGhTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNpZ25pbkZvcm0gPSB0aGlzLmZvcm0uZ3JvdXAoe1xuICAgICAgZW1haWw6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgcGFzc3dvcmQgOiBbJycsVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KVxuICAgIFxuICB9XG4gIG9uU3VibWl0KCl7XG4gICAgY29uc3QgZW1haWwgPSB0aGlzLnNpZ25pbkZvcm0udmFsdWUuZW1haWxcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuc2lnbmluRm9ybS52YWx1ZS5wYXNzd29yZFxuICAgIHRoaXMuYXV0aC5zaWduaW5Vc2VyKGVtYWlsLHBhc3N3b3JkKVxuICAgIGNvbnNvbGUubG9nKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5lbWFpbClcbiAgfVxuXG5cbn1cbiJdfQ==