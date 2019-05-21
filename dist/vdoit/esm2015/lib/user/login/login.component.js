/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
export class LoginComponent {
    /**
     * @param {?} form
     * @param {?} auth
     */
    constructor(form, auth) {
        this.form = form;
        this.auth = auth;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.signinForm = this.form.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        const email = this.signinForm.value.email;
        /** @type {?} */
        const password = this.signinForm.value.password;
        this.auth.signinUser(email, password);
        console.log(firebase.auth().currentUser.email);
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-login',
                template: "\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n      <div class=\"card card-signin my-5\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Sign In</h5>\n          <form class=\"form-signin\" [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-label-group\"><span>Your Email</span>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\"  formControlName=\"email\" required autofocus>\n              \n            </div>\n\n            <div class=\"form-label-group\">\n              <span>Passwords</span>\n              <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" required>\n              \n            </div>\n\n        \n            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\n            <hr class=\"my-4\">\n            \n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [":root{--input-padding-x:1.5rem;--input-padding-y:.75rem}body{background:#007bff;background:linear-gradient(to right,#0062e6,#33aeff)}.card-signin{border:0;border-radius:1rem;box-shadow:0 .5rem 1rem 0 rgba(0,0,0,.1)}.card-signin .card-title{margin-bottom:2rem;font-weight:300;font-size:1.5rem}.card-signin .card-body{padding:2rem}.form-signin{width:100%}.form-signin .btn{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:700;padding:1rem;transition:.2s}.form-label-group{position:relative;margin-bottom:1rem}.form-label-group input{height:auto;border-radius:2rem}.form-label-group>input,.form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}.form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:.1s ease-in-out}.form-label-group input::-webkit-input-placeholder{color:transparent}.form-label-group input:-ms-input-placeholder{color:transparent}.form-label-group input::-ms-input-placeholder{color:transparent}.form-label-group input::-moz-placeholder{color:transparent}.form-label-group input::placeholder{color:transparent}.form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y)/ 3)}.form-label-group input:not(:placeholder-shown)~label{padding-top:calc(var(--input-padding-y)/ 3);padding-bottom:calc(var(--input-padding-y)/ 3);font-size:12px;color:#777}.btn-google{color:#fff;background-color:#ea4335}.btn-facebook{color:#fff;background-color:#3b5998}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFZLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUE7QUFRcEMsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBRXpCLFlBQW9CLElBQWtCLEVBQVMsSUFBZ0I7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXBFLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUssRUFBQyxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQzlCLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQTtJQUVKLENBQUM7Ozs7SUFDRCxRQUFROztjQUNBLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLOztjQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hELENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHVqQ0FBcUM7O2FBRXRDOzs7O1lBVGtCLFdBQVc7WUFDckIsV0FBVzs7OztJQVVwQixvQ0FBc0I7Ozs7O0lBQ1IsOEJBQTBCOzs7OztJQUFDLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJ1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1sb2dpbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5zaWduaW5Gb3JtIDogRm9ybUdyb3VwXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybSA6IEZvcm1CdWlsZGVyLHByaXZhdGUgYXV0aDpBdXRoU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zaWduaW5Gb3JtID0gdGhpcy5mb3JtLmdyb3VwKHtcbiAgICAgIGVtYWlsOlsnJyxWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIHBhc3N3b3JkIDogWycnLFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSlcbiAgICBcbiAgfVxuICBvblN1Ym1pdCgpe1xuICAgIGNvbnN0IGVtYWlsID0gdGhpcy5zaWduaW5Gb3JtLnZhbHVlLmVtYWlsXG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnNpZ25pbkZvcm0udmFsdWUucGFzc3dvcmRcbiAgICB0aGlzLmF1dGguc2lnbmluVXNlcihlbWFpbCxwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZyhmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIuZW1haWwpXG4gIH1cblxuXG59XG4iXX0=