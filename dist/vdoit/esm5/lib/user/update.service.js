/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    /** @nocollapse */ CountriesService.ngInjectableDef = i0.defineInjectable({ factory: function CountriesService_Factory() { return new CountriesService(i0.inject(i1.HttpClient)); }, token: CountriesService, providedIn: "root" });
    return CountriesService;
}());
export { CountriesService };
if (false) {
    /** @type {?} */
    CountriesService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    CountriesService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZG9pdC8iLCJzb3VyY2VzIjpbImxpYi91c2VyL3VwZGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRy9EO0lBT0UsMEJBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBRm5DLFFBQUcsR0FBVyxtR0FBbUcsQ0FBQztJQUUzRSxDQUFDOzs7O0lBRXhDLHVDQUFZOzs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQVhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsVUFBVTs7OzJCQURuQjtDQWdCQyxBQVpELElBWUM7U0FUWSxnQkFBZ0I7OztJQUUzQiwrQkFBa0g7Ozs7O0lBRXRHLGdDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ291bnRyaWVzU2VydmljZSB7XHJcblxyXG4gIHVybCA6c3RyaW5nID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc2FnYXJzaGlyYmhhdGUvQ291bnRyeS1TdGF0ZS1DaXR5LURhdGFiYXNlL21hc3Rlci9Db250cmllcy5qc29uXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgYWxsQ291bnRyaWVzKCk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsKTtcclxuICB9XHJcbn0iXX0=