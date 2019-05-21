/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
//declare var finalize : any
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CountriesService } from '../update.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(afStorage, form, country, db, router, authService) {
        this.afStorage = afStorage;
        this.form = form;
        this.country = country;
        this.db = db;
        this.router = router;
        this.authService = authService;
        this.loading = false;
        this.submitted = false;
        this.stateInfo = [];
        this.countryInfo = [];
        this.cityInfo = [];
        this.url = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
    }
    /**
     * @return {?}
     */
    RegistrationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.userForm = this.form.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            organization: ['', [Validators.required]],
            uploadImage: ['', [Validators.required]],
            selectCountry: ['', [Validators.required]],
            selectState: ['', [Validators.required]],
            selectCity: ['', [Validators.required]]
        });
        this.getCountries();
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        get: /**
         * @return {?}
         */
        function () { return this.userForm.controls; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    RegistrationComponent.prototype.upload = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        //this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
        this.uploadProgress = this.task.percentageChanges();
        //this.downloadURL = this.task.downloadURL();
        this.task.snapshotChanges().pipe(finalize((/**
         * @return {?}
         */
        function () {
            _this.downloadURL = _this.ref.getDownloadURL();
            _this.downloadURL.subscribe((/**
             * @param {?} url
             * @return {?}
             */
            function (url) { return (_this.image = url); }));
        })))
            .subscribe();
    };
    /**
     * @return {?}
     */
    RegistrationComponent.prototype.getCountries = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.country.allCountries().
            subscribe((/**
         * @param {?} data2
         * @return {?}
         */
        function (data2) {
            _this.countryInfo = data2.Countries;
            return _this.countryInfo;
            //console.log('Data:', this.countryInfo);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return console.log(err); }), (/**
         * @return {?}
         */
        function () { return console.log('complete'); }));
    };
    /**
     * @param {?} countryValue
     * @return {?}
     */
    RegistrationComponent.prototype.onChangeCountry = /**
     * @param {?} countryValue
     * @return {?}
     */
    function (countryValue) {
        this.stateInfo = this.countryInfo[countryValue].States;
        this.cityInfo = this.stateInfo[0].Cities;
        return this.stateInfo;
        //console.log(this.cityInfo);
    };
    /**
     * @param {?} stateValue
     * @return {?}
     */
    RegistrationComponent.prototype.onChangeState = /**
     * @param {?} stateValue
     * @return {?}
     */
    function (stateValue) {
        this.cityInfo = this.stateInfo[stateValue].Cities;
        return this.cityInfo;
        //console.log(this.cityInfo);
    };
    /**
     * @return {?}
     */
    RegistrationComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        this.router.navigate(['/login']);
    };
    /**
     * @return {?}
     */
    RegistrationComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        /** @type {?} */
        var email = this.userForm.value.email;
        /** @type {?} */
        var password = this.userForm.value.password;
        this.selectCountry = parseInt(this.userForm.value.selectCountry),
            this.selectState = parseInt(this.userForm.value.selectState),
            this.selectCity = parseInt(this.userForm.value.selectCity);
        console.log(typeof (this.selectCountry));
        console.log(this.country.allCountries());
        this.country.allCountries().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var country = data.Countries[_this.selectCountry];
            /** @type {?} */
            var state = country.States[_this.selectState];
            _this.selectedCountry = country.CountryName;
            _this.selectedState = state.StateName;
            _this.SelectedCity = state.Cities[_this.selectCity];
            console.log(_this.selectedCountry);
            console.log(_this.selectedState);
            console.log(_this.SelectedCity);
            /** @type {?} */
            var postt = (/**
             * @return {?}
             */
            function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var doc_ref;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.db.collection('user').add({
                                email: this.userForm.value.email,
                                //password:this.userForm.value.password,
                                name: this.userForm.value.name,
                                organization: this.userForm.value.organization,
                                uploadImage: this.image,
                                selectCountry: this.selectedCountry,
                                selectState: this.selectedState,
                                selectCity: this.SelectedCity,
                            })];
                        case 1:
                            doc_ref = _a.sent();
                            this.authService.signupUser(email, password);
                            this.router.navigate(['/login']);
                            return [2 /*return*/, doc_ref.id];
                    }
                });
            }); });
            postt().then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
            }));
        }));
        this.loading = true;
    };
    RegistrationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'enl-registration',
                    template: "<div>  \n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n     <div class=\"form-group col-md-6\">\n    <label>\n      <input type=\"text\" class=\"input\" formControlName=\"name\" placeholder=\"Name\"[ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" >\n      <div class=\"line-box\">\n        <div class=\"line\"></div>\n      </div>\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">Name is required</div>\n        <div *ngIf = \"f.name.errors.pattern\">Name Should be in Alphabetical</div>\n    </div>\n    </label>\n    </div>\n    <label>\n        <div class=\"form-group col-md-6\">\n            <input type=\"email\" class=\"input\" formControlName=\"email\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n      \n            <div class=\"line-box\">\n              <div class=\"line\"></div>\n            </div>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Name is required</div>\n              <div *ngIf = \"f.email.errors.email\">Enter Valid Email</div>\n          </div>\n          </div>\n         <div class=\"form-group col-md-6\"> \n      <input type=\"password\" class=\"input\" formControlName=\"password\" placeholder=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n      <div class=\"line-box\">\n        <div class=\"line\"></div>\n      </div>\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.minlength\">Password length should be minimum of 5</div>\n        \n    </div>\n  </div>\n    </label>\n  \n\n    <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Organization Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"organization\" id=\"inputEmail4\" placeholder=\"Organization Name\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label class=\"image-upload-container btn btn-bwm\">\n          <span>Select Image</span>\n          <input formControlName = \"uploadImage\"\n                 type=\"file\"\n                 accept=\"image/*\"\n                 (change)=\"upload($event)\">\n        </label>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>Select Country</label>\n      <select class=\"form-control\"formControlName=\"selectCountry\"  (change)=\"onChangeCountry($event.target.value)\">\n        <option *ngFor=\"let country of countryInfo; let i = index\" value=\"{{i}}\">{{country?.CountryName}}</option>\n      </select>  \n    </div>\n\n    <div class=\"form-group\">\n        <label>Select State</label>\n        <select class=\"form-control\" formControlName = \"selectState\" (change)=\"onChangeState($event.target.value)\">\n         <!-- <option *ngIf=\"stateInfo == ''\" value=\"-1\">--Select State--</option> -->\n          <option *ngFor=\"let state of stateInfo; let j = index\" value=\"{{j}}\">{{state?.StateName}}</option>\n        </select>  \n    </div>\n\n    <div class=\"form-group\">\n        <label>Select City</label>\n        <select formControlName=\"selectCity\" class=\"form-control\">\n          <!--  <option *ngIf=\"cityInfo == ''\" value=\"-1\">--Select CIty--</option> -->\n          <option *ngFor=\"let city of cityInfo; let k = index\" value=\"{{k}}\">{{city}}</option>\n        </select>  \n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\"><a routerLink=\"/login\"></a>Register</button>\n  </div>\n\n  </form>\n  <div class=\"form-group\">\n     <button [disabled]=\"loading\" (click)=\"login()\"class=\"btn btn-primary\">Login here</button>\n  </div>\n</div>",
                    styles: ["body{background:#c5e1a5}form{width:60%;margin:60px auto;background:#efefef;padding:60px 120px 80px;text-align:center;box-shadow:2px 2px 3px rgba(0,0,0,.1)}label{display:block;position:relative;margin:40px 0}.label-txt{position:absolute;top:-1.6em;padding:10px;font-family:sans-serif;font-size:.8em;letter-spacing:1px;color:#787878;transition:.3s}.input{width:100%;padding:10px;background:0 0;border:none;outline:0}.line-box{position:relative;width:100%;height:2px;background:#bcbcbc}.line{position:absolute;width:0%;height:2px;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#8bc34a;transition:.6s}.input:focus+.line-box .line{width:100%}.label-active{top:-3em}button{display:inline-block;padding:12px 24px;background:#dcdcdc;font-weight:700;color:#787878;border:none;outline:0;border-radius:3px;cursor:pointer;transition:.3s}button:hover{background:#8bc34a;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    RegistrationComponent.ctorParameters = function () { return [
        { type: AngularFireStorage },
        { type: FormBuilder },
        { type: CountriesService },
        { type: AngularFirestore },
        { type: Router },
        { type: AuthService }
    ]; };
    return RegistrationComponent;
}());
export { RegistrationComponent };
if (false) {
    /** @type {?} */
    RegistrationComponent.prototype.userForm;
    /** @type {?} */
    RegistrationComponent.prototype.loading;
    /** @type {?} */
    RegistrationComponent.prototype.submitted;
    /** @type {?} */
    RegistrationComponent.prototype.data;
    /** @type {?} */
    RegistrationComponent.prototype.stateInfo;
    /** @type {?} */
    RegistrationComponent.prototype.countryInfo;
    /** @type {?} */
    RegistrationComponent.prototype.cityInfo;
    /** @type {?} */
    RegistrationComponent.prototype.ref;
    /** @type {?} */
    RegistrationComponent.prototype.task;
    /** @type {?} */
    RegistrationComponent.prototype.uploadProgress;
    /** @type {?} */
    RegistrationComponent.prototype.uploadState;
    /** @type {?} */
    RegistrationComponent.prototype.downloadURL;
    /** @type {?} */
    RegistrationComponent.prototype.selectCountry;
    /** @type {?} */
    RegistrationComponent.prototype.selectCity;
    /** @type {?} */
    RegistrationComponent.prototype.selectState;
    /** @type {?} */
    RegistrationComponent.prototype.selectedCountry;
    /** @type {?} */
    RegistrationComponent.prototype.selectedState;
    /** @type {?} */
    RegistrationComponent.prototype.SelectedCity;
    /** @type {?} */
    RegistrationComponent.prototype.url;
    /** @type {?} */
    RegistrationComponent.prototype.image;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.afStorage;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.country;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.db;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    RegistrationComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zkb2l0LyIsInNvdXJjZXMiOlsibGliL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBWSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUE7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUE7QUFDbkQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0QsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RyxPQUFPLEVBQUcsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUE7QUFHekQ7SUE2QkUsK0JBQW9CLFNBQTZCLEVBQVMsSUFBaUIsRUFBUyxPQUF3QixFQUFTLEVBQW9CLEVBQVMsTUFBZSxFQUFTLFdBQXdCO1FBQTlLLGNBQVMsR0FBVCxTQUFTLENBQW9CO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFwQmxNLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixjQUFTLEdBQUUsRUFBRSxDQUFDO1FBQ2QsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQWFkLFFBQUcs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QUNoQyw0Q0FBZ0M7O0lBQ2hDLDhDQUFhOztJQUNiLDJDQUFVOztJQUNWLDRDQUFXOztJQUNYLGdEQUFnQjs7SUFDaEIsOENBQWM7O0lBQ1osNkNBQVk7O0lBQ2Qsb0NBQWtIOztJQUNwSCxzQ0FBSzs7Ozs7SUFDUywwQ0FBcUM7Ozs7O0lBQUMscUNBQXlCOzs7OztJQUFDLHdDQUFnQzs7Ozs7SUFBQyxtQ0FBNEI7Ozs7O0lBQUMsdUNBQXVCOzs7OztJQUFDLDRDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vZGVjbGFyZSB2YXIgZmluYWxpemUgOiBhbnlcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLEZvcm1Hcm91cCAsVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOyBcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJy4uL2F1dGguc2VydmljZSdcbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2V9IGZyb20gJy4uL3VwZGF0ZS5zZXJ2aWNlJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UsIEFuZ3VsYXJGaXJlU3RvcmFnZVJlZmVyZW5jZSwgQW5ndWxhckZpcmVVcGxvYWRUYXNrIH0gZnJvbSAnYW5ndWxhcmZpcmUyL3N0b3JhZ2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJ1xuaW1wb3J0IHsgIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJ1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1yZWdpc3RyYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgdXNlckZvcm0gOiBGb3JtR3JvdXA7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG4gIGRhdGE7XG4gIHN0YXRlSW5mbz0gW107XG4gIGNvdW50cnlJbmZvID0gW107XG4gIGNpdHlJbmZvID0gW107XG4gIHJlZjogQW5ndWxhckZpcmVTdG9yYWdlUmVmZXJlbmNlO1xuICB0YXNrOiBBbmd1bGFyRmlyZVVwbG9hZFRhc2s7XG4gIHVwbG9hZFByb2dyZXNzOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIC8vZG93bmxvYWRVUkw6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgdXBsb2FkU3RhdGU6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgZG93bmxvYWRVUkwgOiBPYnNlcnZhYmxlPHN0cmluZz5cbiAgc2VsZWN0Q291bnRyeVxuICBzZWxlY3RDaXR5XG4gIHNlbGVjdFN0YXRlXG4gIHNlbGVjdGVkQ291bnRyeTtcbiAgc2VsZWN0ZWRTdGF0ZTtcbiAgICBTZWxlY3RlZENpdHlcbiAgdXJsIDpzdHJpbmcgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWdhcnNoaXJiaGF0ZS9Db3VudHJ5LVN0YXRlLUNpdHktRGF0YWJhc2UvbWFzdGVyL0NvbnRyaWVzLmpzb25cIjtcbmltYWdlXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWZTdG9yYWdlOiBBbmd1bGFyRmlyZVN0b3JhZ2UscHJpdmF0ZSBmb3JtOiBGb3JtQnVpbGRlcixwcml2YXRlIGNvdW50cnk6Q291bnRyaWVzU2VydmljZSxwcml2YXRlIGRiOiBBbmd1bGFyRmlyZXN0b3JlLHByaXZhdGUgcm91dGVyIDogUm91dGVyLHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKVxuIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgXG4gICAgICB0aGlzLnVzZXJGb3JtID0gdGhpcy5mb3JtLmdyb3VwKHtcbiAgICAgICAgbmFtZTogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIGVtYWlsOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgICAgICBwYXNzd29yZDogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkLFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpXV0sXG4gICAgICAgIG9yZ2FuaXphdGlvbjpbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgdXBsb2FkSW1hZ2UgOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgc2VsZWN0Q291bnRyeSA6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBzZWxlY3RTdGF0ZSA6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBzZWxlY3RDaXR5IDogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5nZXRDb3VudHJpZXMoKTsgIFxuICB9XG4gIGdldCBmKCkgeyByZXR1cm4gdGhpcy51c2VyRm9ybS5jb250cm9sczsgfVxuXG4gIHVwbG9hZChldmVudCkge1xuICAgIGNvbnN0IGlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuICAgIHRoaXMucmVmID0gdGhpcy5hZlN0b3JhZ2UucmVmKGlkKTtcbiAgICB0aGlzLnRhc2sgPSB0aGlzLnJlZi5wdXQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAvL3RoaXMudXBsb2FkU3RhdGUgPSB0aGlzLnRhc2suc25hcHNob3RDaGFuZ2VzKCkucGlwZShtYXAocyA9PiBzLnN0YXRlKSk7XG4gXG4gICAgdGhpcy51cGxvYWRQcm9ncmVzcyA9IHRoaXMudGFzay5wZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgLy90aGlzLmRvd25sb2FkVVJMID0gdGhpcy50YXNrLmRvd25sb2FkVVJMKCk7XG4gICB0aGlzLnRhc2suc25hcHNob3RDaGFuZ2VzKCkucGlwZShcbiAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICB0aGlzLmRvd25sb2FkVVJMID0gdGhpcy5yZWYuZ2V0RG93bmxvYWRVUkwoKVxuICAgICAgdGhpcy5kb3dubG9hZFVSTC5zdWJzY3JpYmUodXJsID0+ICh0aGlzLmltYWdlID0gdXJsKSk7XG4gICAgfSlcbiAgKVxuICAuc3Vic2NyaWJlKCk7XG5cblxuICB9XG4gIGdldENvdW50cmllcygpe1xuICAgIHRoaXMuY291bnRyeS5hbGxDb3VudHJpZXMoKS5cbiAgICBzdWJzY3JpYmUoXG4gICAgICBkYXRhMiA9PiB7XG4gICAgICAgIHRoaXMuY291bnRyeUluZm89ZGF0YTIuQ291bnRyaWVzO1xuICAgICAgICByZXR1cm4gdGhpcy5jb3VudHJ5SW5mb1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdEYXRhOicsIHRoaXMuY291bnRyeUluZm8pO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFxuICAgICAgKCkgPT4gY29uc29sZS5sb2coJ2NvbXBsZXRlJylcbiAgICApXG4gIH1cblxuICBvbkNoYW5nZUNvdW50cnkoY291bnRyeVZhbHVlKSB7XG4gICAgdGhpcy5zdGF0ZUluZm89dGhpcy5jb3VudHJ5SW5mb1tjb3VudHJ5VmFsdWVdLlN0YXRlcztcbiAgICB0aGlzLmNpdHlJbmZvPXRoaXMuc3RhdGVJbmZvWzBdLkNpdGllcztcbiAgICByZXR1cm4gdGhpcy5zdGF0ZUluZm9cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY2l0eUluZm8pO1xuICB9XG5cbiAgb25DaGFuZ2VTdGF0ZShzdGF0ZVZhbHVlKSB7XG4gICAgdGhpcy5jaXR5SW5mbz10aGlzLnN0YXRlSW5mb1tzdGF0ZVZhbHVlXS5DaXRpZXM7XG4gICAgcmV0dXJuIHRoaXMuY2l0eUluZm9cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY2l0eUluZm8pO1xuICB9XG4gIGxvZ2luKCl7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgfVxuXG4gICBvblN1Ym1pdCgpe1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuXG4gICAgICAgIC8vIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWRcbiAgICAgICAgaWYgKHRoaXMudXNlckZvcm0uaW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsID0gdGhpcy51c2VyRm9ybS52YWx1ZS5lbWFpbDtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLnVzZXJGb3JtLnZhbHVlLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLnNlbGVjdENvdW50cnkgPSBwYXJzZUludCh0aGlzLnVzZXJGb3JtLnZhbHVlLnNlbGVjdENvdW50cnkpLFxuICAgICAgICB0aGlzLnNlbGVjdFN0YXRlPXBhcnNlSW50KHRoaXMudXNlckZvcm0udmFsdWUuc2VsZWN0U3RhdGUpLFxuICAgICAgICB0aGlzLnNlbGVjdENpdHk9cGFyc2VJbnQodGhpcy51c2VyRm9ybS52YWx1ZS5zZWxlY3RDaXR5KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZih0aGlzLnNlbGVjdENvdW50cnkpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb3VudHJ5LmFsbENvdW50cmllcygpKTtcbiAgICAgICAgdGhpcy5jb3VudHJ5LmFsbENvdW50cmllcygpLnN1YnNjcmliZShkYXRhPT57XG4gICAgICAgICAgbGV0IGNvdW50cnkgPSBkYXRhLkNvdW50cmllc1t0aGlzLnNlbGVjdENvdW50cnldXG4gICAgICAgICAgbGV0IHN0YXRlID0gY291bnRyeS5TdGF0ZXNbdGhpcy5zZWxlY3RTdGF0ZV1cbiAgICAgICAgICBcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkQ291bnRyeSA9IGNvdW50cnkuQ291bnRyeU5hbWVcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkU3RhdGUgPSBzdGF0ZS5TdGF0ZU5hbWVcbiAgICAgICAgICB0aGlzLlNlbGVjdGVkQ2l0eSA9IHN0YXRlLkNpdGllc1t0aGlzLnNlbGVjdENpdHldXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZENvdW50cnkpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZFN0YXRlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuU2VsZWN0ZWRDaXR5KVxuICAgICAgICAgIHZhciBwb3N0dD0gYXN5bmMoKSA9PntcbiAgICAgICAgICAgIGNvbnN0IGRvY19yZWY9YXdhaXQgdGhpcy5kYi5jb2xsZWN0aW9uKCd1c2VyJykuYWRkKHtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgZW1haWw6dGhpcy51c2VyRm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgICAgICAgICAvL3Bhc3N3b3JkOnRoaXMudXNlckZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICAgICAgICAgbmFtZTp0aGlzLnVzZXJGb3JtLnZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgb3JnYW5pemF0aW9uOnRoaXMudXNlckZvcm0udmFsdWUub3JnYW5pemF0aW9uLFxuICAgICAgICAgICAgIHVwbG9hZEltYWdlIDogdGhpcy5pbWFnZSxcbiAgICAgICAgICAgICBzZWxlY3RDb3VudHJ5IDogdGhpcy5zZWxlY3RlZENvdW50cnksXG4gICAgICAgICAgICAgc2VsZWN0U3RhdGU6dGhpcy5zZWxlY3RlZFN0YXRlLFxuICAgICAgICAgICAgIHNlbGVjdENpdHk6dGhpcy5TZWxlY3RlZENpdHksXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgIH0pXG4gICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2Uuc2lnbnVwVXNlcihlbWFpbCxwYXNzd29yZClcbiAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICAgICAgICAgcmV0dXJuIGRvY19yZWYuaWRcbiAgICAgICAgIH1cbiAgICAgICAgIHBvc3R0KCkudGhlbihyZXM9PlxuICAgICAgICAgICB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxufVxuIl19