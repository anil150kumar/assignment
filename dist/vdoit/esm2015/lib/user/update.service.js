/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class CountriesService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
    }
    /**
     * @return {?}
     */
    allCountries() {
        return this.http.get(this.url);
    }
}
CountriesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CountriesService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ CountriesService.ngInjectableDef = i0.defineInjectable({ factory: function CountriesService_Factory() { return new CountriesService(i0.inject(i1.HttpClient)); }, token: CountriesService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CountriesService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    CountriesService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZG9pdC8iLCJzb3VyY2VzIjpbImxpYi91c2VyL3VwZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBTS9ELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJM0IsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFGbkMsUUFBRyxHQUFXLG1HQUFtRyxDQUFDO0lBRTNFLENBQUM7Ozs7SUFFeEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQVhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLFVBQVU7Ozs7O0lBUWpCLCtCQUFrSDs7Ozs7SUFFdEcsZ0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudHJpZXNTZXJ2aWNlIHtcclxuXHJcbiAgdXJsIDpzdHJpbmcgPSBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9zYWdhcnNoaXJiaGF0ZS9Db3VudHJ5LVN0YXRlLUNpdHktRGF0YWJhc2UvbWFzdGVyL0NvbnRyaWVzLmpzb25cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxyXG5cclxuICBhbGxDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpO1xyXG4gIH1cclxufSJdfQ==