import { __awaiter, __generator } from 'tslib';
import { finalize } from 'rxjs/operators';
import { FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageModule } from 'angularfire2/storage';
import { Injectable, NgModule, Component, defineInjectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth, initializeApp, firestore } from 'firebase';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        auth().createUserWithEmailAndPassword(email, password)
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
        auth().signInWithEmailAndPassword(email, password)
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            //console.log(response.user.uid)
            _this.router.navigate(['user/home/:' + response.user.email]);
            auth().currentUser.getIdToken()
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
        auth().signOut();
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
        auth().currentUser.getIdToken()
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CountriesService = /** @class */ (function () {
    function CountriesService(http) {
        this.http = http;
        this.url = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
    }
    /**
     * @return {?}
     */
    CountriesService.prototype.allCountries = /**
     * @return {?}
     */
    function () {
        return this.http.get(this.url);
    };
    CountriesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CountriesService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ CountriesService.ngInjectableDef = defineInjectable({ factory: function CountriesService_Factory() { return new CountriesService(inject(HttpClient)); }, token: CountriesService, providedIn: "root" });
    return CountriesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            function () { return __awaiter(_this, void 0, void 0, function () {
                var doc_ref;
                return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(form, auth$$1) {
        this.form = form;
        this.auth = auth$$1;
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
        console.log(auth().currentUser.email);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth$$1, router, db) {
        this.auth = auth$$1;
        this.router = router;
        this.db = db;
        this.user = auth().currentUser;
    }
    /**
     * @return {?}
     */
    HomeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.url = this.router.url.slice(12);
        //this.data = this.db.collection('user')
        firestore().collection('user').onSnapshot((/**
         * @param {?} doc
         * @return {?}
         */
        function (doc) {
            //console.log(doc)
            doc.forEach((/**
             * @param {?} docs
             * @return {?}
             */
            function (docs) {
                console.log(docs);
                //console.log(doc);
                _this.data = docs.data();
                // console.log(this.data())
                console.log(_this.data.uploadImage);
            }));
        }));
        //console.log(firebase.database().app)
        // this.data.get().then(documentSnapshot => {
        //   if (documentSnapshot.exists) {
        //     console.log(documentSnapshot);
        //   }
        // });
    };
    /**
     * @return {?}
     */
    HomeComponent.prototype.onLogOut = /**
     * @return {?}
     */
    function () {
        this.auth.logout();
        this.router.navigate[('/')];
    };
    HomeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'enl-home',
                    template: "\n<div class=\"container container-fluid\">\n  <div class=\"col col-mg-6\">\n    <p>Name : {{data?.name}}</p>\n    <p>email : {{data?.email}}</p>\n    <img [src] =\"data?.uploadImage\" height=\"100px\" width=\"100px\">\n    <p>organization : {{data?.organization}}</p>\n    <p>Country : {{data?.selectCountry}}</p>\n    <p>state : {{data?.selectState}}</p>\n    <p>city : {{data?.selectCity}}</p>\n    \n  </div>\n  <div class=\"btn btn-primary\">\n  <button type=\"button\" (click)=\"onLogOut()\"><a href=\"/\">Logout</a></button>\n  </div>\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    HomeComponent.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router },
        { type: AngularFirestore }
    ]; };
    return HomeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var firebaseConfig = {
    apiKey: "AIzaSyCGPXlnA1hFVa1CeTSlOCwKEYsMypTTOSw",
    authDomain: "vdoit-507fc.firebaseapp.com",
    databaseURL: "https://vdoit-507fc.firebaseio.com",
    projectId: "vdoit-507fc",
    storageBucket: "vdoit-507fc.appspot.com",
    messagingSenderId: "1049933201863",
    appId: "1:1049933201863:web:618fb38251a368cf"
};
initializeApp(firebaseConfig);
var VdoitModule = /** @class */ (function () {
    function VdoitModule() {
    }
    VdoitModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [RegistrationComponent, LoginComponent, HomeComponent],
                    imports: [ReactiveFormsModule,
                        CommonModule,
                        HttpClientModule,
                        AngularFireModule.initializeApp(firebaseConfig),
                        AngularFireDatabaseModule,
                        AngularFireStorageModule,
                        FormsModule
                    ],
                    providers: [AngularFirestore, CountriesService, AngularFireStorageModule,
                        AuthService, AuthGuard, AngularFireAuth
                    ],
                    exports: [RegistrationComponent, HomeComponent]
                },] }
    ];
    return VdoitModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { firebaseConfig, RegistrationComponent, LoginComponent, AuthGuard, HomeComponent, VdoitModule, AuthService as ɵb, CountriesService as ɵa };

//# sourceMappingURL=vdoit.js.map