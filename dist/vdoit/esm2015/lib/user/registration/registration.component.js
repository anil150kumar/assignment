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
export class RegistrationComponent {
    /**
     * @param {?} afStorage
     * @param {?} form
     * @param {?} country
     * @param {?} db
     * @param {?} router
     * @param {?} authService
     */
    constructor(afStorage, form, country, db, router, authService) {
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
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    get f() { return this.userForm.controls; }
    /**
     * @param {?} event
     * @return {?}
     */
    upload(event) {
        /** @type {?} */
        const id = Math.random().toString(36).substring(2);
        this.ref = this.afStorage.ref(id);
        this.task = this.ref.put(event.target.files[0]);
        //this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
        this.uploadProgress = this.task.percentageChanges();
        //this.downloadURL = this.task.downloadURL();
        this.task.snapshotChanges().pipe(finalize((/**
         * @return {?}
         */
        () => {
            this.downloadURL = this.ref.getDownloadURL();
            this.downloadURL.subscribe((/**
             * @param {?} url
             * @return {?}
             */
            url => (this.image = url)));
        })))
            .subscribe();
    }
    /**
     * @return {?}
     */
    getCountries() {
        this.country.allCountries().
            subscribe((/**
         * @param {?} data2
         * @return {?}
         */
        data2 => {
            this.countryInfo = data2.Countries;
            return this.countryInfo;
            //console.log('Data:', this.countryInfo);
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => console.log(err)), (/**
         * @return {?}
         */
        () => console.log('complete')));
    }
    /**
     * @param {?} countryValue
     * @return {?}
     */
    onChangeCountry(countryValue) {
        this.stateInfo = this.countryInfo[countryValue].States;
        this.cityInfo = this.stateInfo[0].Cities;
        return this.stateInfo;
        //console.log(this.cityInfo);
    }
    /**
     * @param {?} stateValue
     * @return {?}
     */
    onChangeState(stateValue) {
        this.cityInfo = this.stateInfo[stateValue].Cities;
        return this.cityInfo;
        //console.log(this.cityInfo);
    }
    /**
     * @return {?}
     */
    login() {
        this.router.navigate(['/login']);
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }
        /** @type {?} */
        const email = this.userForm.value.email;
        /** @type {?} */
        const password = this.userForm.value.password;
        this.selectCountry = parseInt(this.userForm.value.selectCountry),
            this.selectState = parseInt(this.userForm.value.selectState),
            this.selectCity = parseInt(this.userForm.value.selectCity);
        console.log(typeof (this.selectCountry));
        console.log(this.country.allCountries());
        this.country.allCountries().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            let country = data.Countries[this.selectCountry];
            /** @type {?} */
            let state = country.States[this.selectState];
            this.selectedCountry = country.CountryName;
            this.selectedState = state.StateName;
            this.SelectedCity = state.Cities[this.selectCity];
            console.log(this.selectedCountry);
            console.log(this.selectedState);
            console.log(this.SelectedCity);
            /** @type {?} */
            var postt = (/**
             * @return {?}
             */
            () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                /** @type {?} */
                const doc_ref = yield this.db.collection('user').add({
                    email: this.userForm.value.email,
                    //password:this.userForm.value.password,
                    name: this.userForm.value.name,
                    organization: this.userForm.value.organization,
                    uploadImage: this.image,
                    selectCountry: this.selectedCountry,
                    selectState: this.selectedState,
                    selectCity: this.SelectedCity,
                });
                this.authService.signupUser(email, password);
                this.router.navigate(['/login']);
                return doc_ref.id;
            }));
            postt().then((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                console.log(res);
            }));
        }));
        this.loading = true;
    }
}
RegistrationComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-registration',
                template: "<div>  \n  <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\n\n     <div class=\"form-group col-md-6\">\n    <label>\n      <input type=\"text\" class=\"input\" formControlName=\"name\" placeholder=\"Name\"[ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" >\n      <div class=\"line-box\">\n        <div class=\"line\"></div>\n      </div>\n      <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.name.errors.required\">Name is required</div>\n        <div *ngIf = \"f.name.errors.pattern\">Name Should be in Alphabetical</div>\n    </div>\n    </label>\n    </div>\n    <label>\n        <div class=\"form-group col-md-6\">\n            <input type=\"email\" class=\"input\" formControlName=\"email\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n      \n            <div class=\"line-box\">\n              <div class=\"line\"></div>\n            </div>\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Name is required</div>\n              <div *ngIf = \"f.email.errors.email\">Enter Valid Email</div>\n          </div>\n          </div>\n         <div class=\"form-group col-md-6\"> \n      <input type=\"password\" class=\"input\" formControlName=\"password\" placeholder=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\n      <div class=\"line-box\">\n        <div class=\"line\"></div>\n      </div>\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.minlength\">Password length should be minimum of 5</div>\n        \n    </div>\n  </div>\n    </label>\n  \n\n    <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">Organization Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"organization\" id=\"inputEmail4\" placeholder=\"Organization Name\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label class=\"image-upload-container btn btn-bwm\">\n          <span>Select Image</span>\n          <input formControlName = \"uploadImage\"\n                 type=\"file\"\n                 accept=\"image/*\"\n                 (change)=\"upload($event)\">\n        </label>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadProgress | async) + '%'\" [attr.aria-valuenow]=\"(uploadProgress | async)\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label>Select Country</label>\n      <select class=\"form-control\"formControlName=\"selectCountry\"  (change)=\"onChangeCountry($event.target.value)\">\n        <option *ngFor=\"let country of countryInfo; let i = index\" value=\"{{i}}\">{{country?.CountryName}}</option>\n      </select>  \n    </div>\n\n    <div class=\"form-group\">\n        <label>Select State</label>\n        <select class=\"form-control\" formControlName = \"selectState\" (change)=\"onChangeState($event.target.value)\">\n         <!-- <option *ngIf=\"stateInfo == ''\" value=\"-1\">--Select State--</option> -->\n          <option *ngFor=\"let state of stateInfo; let j = index\" value=\"{{j}}\">{{state?.StateName}}</option>\n        </select>  \n    </div>\n\n    <div class=\"form-group\">\n        <label>Select City</label>\n        <select formControlName=\"selectCity\" class=\"form-control\">\n          <!--  <option *ngIf=\"cityInfo == ''\" value=\"-1\">--Select CIty--</option> -->\n          <option *ngFor=\"let city of cityInfo; let k = index\" value=\"{{k}}\">{{city}}</option>\n        </select>  \n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\"><a routerLink=\"/login\"></a>Register</button>\n  </div>\n\n  </form>\n  <div class=\"form-group\">\n     <button [disabled]=\"loading\" (click)=\"login()\"class=\"btn btn-primary\">Login here</button>\n  </div>\n</div>",
                styles: ["body{background:#c5e1a5}form{width:60%;margin:60px auto;background:#efefef;padding:60px 120px 80px;text-align:center;box-shadow:2px 2px 3px rgba(0,0,0,.1)}label{display:block;position:relative;margin:40px 0}.label-txt{position:absolute;top:-1.6em;padding:10px;font-family:sans-serif;font-size:.8em;letter-spacing:1px;color:#787878;transition:.3s}.input{width:100%;padding:10px;background:0 0;border:none;outline:0}.line-box{position:relative;width:100%;height:2px;background:#bcbcbc}.line{position:absolute;width:0%;height:2px;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);background:#8bc34a;transition:.6s}.input:focus+.line-box .line{width:100%}.label-active{top:-3em}button{display:inline-block;padding:12px 24px;background:#dcdcdc;font-weight:700;color:#787878;border:none;outline:0;border-radius:3px;cursor:pointer;transition:.3s}button:hover{background:#8bc34a;color:#fff}"]
            }] }
];
/** @nocollapse */
RegistrationComponent.ctorParameters = () => [
    { type: AngularFireStorage },
    { type: FormBuilder },
    { type: CountriesService },
    { type: AngularFirestore },
    { type: Router },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Zkb2l0LyIsInNvdXJjZXMiOlsibGliL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBWSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUE7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUE7QUFDbkQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBc0QsTUFBTSxzQkFBc0IsQ0FBQztBQUU5RyxPQUFPLEVBQUcsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUE7QUFTekQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7O0lBdUJoQyxZQUFvQixTQUE2QixFQUFTLElBQWlCLEVBQVMsT0FBd0IsRUFBUyxFQUFvQixFQUFTLE1BQWUsRUFBUyxXQUF3QjtRQUE5SyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQWE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFTLE9BQUUsR0FBRixFQUFFLENBQWtCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBcEJsTSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFFLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEs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Ozs7O0lBQUMsd0NBQWdDOzs7OztJQUFDLG1DQUE0Qjs7Ozs7SUFBQyx1Q0FBdUI7Ozs7O0lBQUMsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy9kZWNsYXJlIHZhciBmaW5hbGl6ZSA6IGFueVxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsRm9ybUdyb3VwICxWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7IFxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0IHsgQ291bnRyaWVzU2VydmljZX0gZnJvbSAnLi4vdXBkYXRlLnNlcnZpY2UnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSwgQW5ndWxhckZpcmVTdG9yYWdlUmVmZXJlbmNlLCBBbmd1bGFyRmlyZVVwbG9hZFRhc2sgfSBmcm9tICdhbmd1bGFyZmlyZTIvc3RvcmFnZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyAgZmluYWxpemUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cblxuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZX0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLXJlZ2lzdHJhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICB1c2VyRm9ybSA6IEZvcm1Hcm91cDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgZGF0YTtcbiAgc3RhdGVJbmZvPSBbXTtcbiAgY291bnRyeUluZm8gPSBbXTtcbiAgY2l0eUluZm8gPSBbXTtcbiAgcmVmOiBBbmd1bGFyRmlyZVN0b3JhZ2VSZWZlcmVuY2U7XG4gIHRhc2s6IEFuZ3VsYXJGaXJlVXBsb2FkVGFzaztcbiAgdXBsb2FkUHJvZ3Jlc3M6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgLy9kb3dubG9hZFVSTDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICB1cGxvYWRTdGF0ZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBkb3dubG9hZFVSTCA6IE9ic2VydmFibGU8c3RyaW5nPlxuICBzZWxlY3RDb3VudHJ5XG4gIHNlbGVjdENpdHlcbiAgc2VsZWN0U3RhdGVcbiAgc2VsZWN0ZWRDb3VudHJ5O1xuICBzZWxlY3RlZFN0YXRlO1xuICAgIFNlbGVjdGVkQ2l0eVxuICB1cmwgOnN0cmluZyA9IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3NhZ2Fyc2hpcmJoYXRlL0NvdW50cnktU3RhdGUtQ2l0eS1EYXRhYmFzZS9tYXN0ZXIvQ29udHJpZXMuanNvblwiO1xuaW1hZ2VcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhZlN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSxwcml2YXRlIGZvcm06IEZvcm1CdWlsZGVyLHByaXZhdGUgY291bnRyeTpDb3VudHJpZXNTZXJ2aWNlLHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlc3RvcmUscHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIscHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpXG4geyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICBcbiAgICAgIHRoaXMudXNlckZvcm0gPSB0aGlzLmZvcm0uZ3JvdXAoe1xuICAgICAgICBuYW1lOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgICAgZW1haWw6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZCxWYWxpZGF0b3JzLmVtYWlsXV0sXG4gICAgICAgIHBhc3N3b3JkOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWQsVmFsaWRhdG9ycy5taW5MZW5ndGgoNSldXSxcbiAgICAgICAgb3JnYW5pemF0aW9uOlsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICB1cGxvYWRJbWFnZSA6IFsnJyxbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgICBzZWxlY3RDb3VudHJ5IDogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIHNlbGVjdFN0YXRlIDogWycnLFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAgIHNlbGVjdENpdHkgOiBbJycsW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgICAgfSk7XG4gICAgICB0aGlzLmdldENvdW50cmllcygpOyAgXG4gIH1cbiAgZ2V0IGYoKSB7IHJldHVybiB0aGlzLnVzZXJGb3JtLmNvbnRyb2xzOyB9XG5cbiAgdXBsb2FkKGV2ZW50KSB7XG4gICAgY29uc3QgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG4gICAgdGhpcy5yZWYgPSB0aGlzLmFmU3RvcmFnZS5yZWYoaWQpO1xuICAgIHRoaXMudGFzayA9IHRoaXMucmVmLnB1dChldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgIC8vdGhpcy51cGxvYWRTdGF0ZSA9IHRoaXMudGFzay5zbmFwc2hvdENoYW5nZXMoKS5waXBlKG1hcChzID0+IHMuc3RhdGUpKTtcbiBcbiAgICB0aGlzLnVwbG9hZFByb2dyZXNzID0gdGhpcy50YXNrLnBlcmNlbnRhZ2VDaGFuZ2VzKCk7XG4gICAvL3RoaXMuZG93bmxvYWRVUkwgPSB0aGlzLnRhc2suZG93bmxvYWRVUkwoKTtcbiAgIHRoaXMudGFzay5zbmFwc2hvdENoYW5nZXMoKS5waXBlKFxuICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgIHRoaXMuZG93bmxvYWRVUkwgPSB0aGlzLnJlZi5nZXREb3dubG9hZFVSTCgpXG4gICAgICB0aGlzLmRvd25sb2FkVVJMLnN1YnNjcmliZSh1cmwgPT4gKHRoaXMuaW1hZ2UgPSB1cmwpKTtcbiAgICB9KVxuICApXG4gIC5zdWJzY3JpYmUoKTtcblxuXG4gIH1cbiAgZ2V0Q291bnRyaWVzKCl7XG4gICAgdGhpcy5jb3VudHJ5LmFsbENvdW50cmllcygpLlxuICAgIHN1YnNjcmliZShcbiAgICAgIGRhdGEyID0+IHtcbiAgICAgICAgdGhpcy5jb3VudHJ5SW5mbz1kYXRhMi5Db3VudHJpZXM7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdW50cnlJbmZvXG4gICAgICAgIC8vY29uc29sZS5sb2coJ0RhdGE6JywgdGhpcy5jb3VudHJ5SW5mbyk7XG4gICAgICB9LFxuICAgICAgZXJyID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgICAoKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgIClcbiAgfVxuXG4gIG9uQ2hhbmdlQ291bnRyeShjb3VudHJ5VmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlSW5mbz10aGlzLmNvdW50cnlJbmZvW2NvdW50cnlWYWx1ZV0uU3RhdGVzO1xuICAgIHRoaXMuY2l0eUluZm89dGhpcy5zdGF0ZUluZm9bMF0uQ2l0aWVzO1xuICAgIHJldHVybiB0aGlzLnN0YXRlSW5mb1xuICAgIC8vY29uc29sZS5sb2codGhpcy5jaXR5SW5mbyk7XG4gIH1cblxuICBvbkNoYW5nZVN0YXRlKHN0YXRlVmFsdWUpIHtcbiAgICB0aGlzLmNpdHlJbmZvPXRoaXMuc3RhdGVJbmZvW3N0YXRlVmFsdWVdLkNpdGllcztcbiAgICByZXR1cm4gdGhpcy5jaXR5SW5mb1xuICAgIC8vY29uc29sZS5sb2codGhpcy5jaXR5SW5mbyk7XG4gIH1cbiAgbG9naW4oKXtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICB9XG5cbiAgIG9uU3VibWl0KCl7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG5cbiAgICAgICAgLy8gc3RvcCBoZXJlIGlmIGZvcm0gaXMgaW52YWxpZFxuICAgICAgICBpZiAodGhpcy51c2VyRm9ybS5pbnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWwgPSB0aGlzLnVzZXJGb3JtLnZhbHVlLmVtYWlsO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMudXNlckZvcm0udmFsdWUucGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuc2VsZWN0Q291bnRyeSA9IHBhcnNlSW50KHRoaXMudXNlckZvcm0udmFsdWUuc2VsZWN0Q291bnRyeSksXG4gICAgICAgIHRoaXMuc2VsZWN0U3RhdGU9cGFyc2VJbnQodGhpcy51c2VyRm9ybS52YWx1ZS5zZWxlY3RTdGF0ZSksXG4gICAgICAgIHRoaXMuc2VsZWN0Q2l0eT1wYXJzZUludCh0aGlzLnVzZXJGb3JtLnZhbHVlLnNlbGVjdENpdHkpXG5cbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mKHRoaXMuc2VsZWN0Q291bnRyeSkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdW50cnkuYWxsQ291bnRyaWVzKCkpO1xuICAgICAgICB0aGlzLmNvdW50cnkuYWxsQ291bnRyaWVzKCkuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgICAgICBsZXQgY291bnRyeSA9IGRhdGEuQ291bnRyaWVzW3RoaXMuc2VsZWN0Q291bnRyeV1cbiAgICAgICAgICBsZXQgc3RhdGUgPSBjb3VudHJ5LlN0YXRlc1t0aGlzLnNlbGVjdFN0YXRlXVxuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeS5Db3VudHJ5TmFtZVxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdGF0ZSA9IHN0YXRlLlN0YXRlTmFtZVxuICAgICAgICAgIHRoaXMuU2VsZWN0ZWRDaXR5ID0gc3RhdGUuQ2l0aWVzW3RoaXMuc2VsZWN0Q2l0eV1cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkQ291bnRyeSlcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkU3RhdGUpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5TZWxlY3RlZENpdHkpXG4gICAgICAgICAgdmFyIHBvc3R0PSBhc3luYygpID0+e1xuICAgICAgICAgICAgY29uc3QgZG9jX3JlZj1hd2FpdCB0aGlzLmRiLmNvbGxlY3Rpb24oJ3VzZXInKS5hZGQoe1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICBlbWFpbDp0aGlzLnVzZXJGb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgIC8vcGFzc3dvcmQ6dGhpcy51c2VyRm9ybS52YWx1ZS5wYXNzd29yZCxcbiAgICAgICAgICAgICBuYW1lOnRoaXMudXNlckZvcm0udmFsdWUubmFtZSxcbiAgICAgICAgICAgICBvcmdhbml6YXRpb246dGhpcy51c2VyRm9ybS52YWx1ZS5vcmdhbml6YXRpb24sXG4gICAgICAgICAgICAgdXBsb2FkSW1hZ2UgOiB0aGlzLmltYWdlLFxuICAgICAgICAgICAgIHNlbGVjdENvdW50cnkgOiB0aGlzLnNlbGVjdGVkQ291bnRyeSxcbiAgICAgICAgICAgICBzZWxlY3RTdGF0ZTp0aGlzLnNlbGVjdGVkU3RhdGUsXG4gICAgICAgICAgICAgc2VsZWN0Q2l0eTp0aGlzLlNlbGVjdGVkQ2l0eSxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgfSlcbiAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5zaWdudXBVc2VyKGVtYWlsLHBhc3N3b3JkKVxuICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgICAgICAgICByZXR1cm4gZG9jX3JlZi5pZFxuICAgICAgICAgfVxuICAgICAgICAgcG9zdHQoKS50aGVuKHJlcz0+XG4gICAgICAgICAgIHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgXG4gICAgICAgICAgICBcbiAgICB9XG59XG4iXX0=