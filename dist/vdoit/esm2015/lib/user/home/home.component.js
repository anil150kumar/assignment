/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
export class HomeComponent {
    /**
     * @param {?} auth
     * @param {?} router
     * @param {?} db
     */
    constructor(auth, router, db) {
        this.auth = auth;
        this.router = router;
        this.db = db;
        this.user = firebase.auth().currentUser;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.url = this.router.url.slice(12);
        //this.data = this.db.collection('user')
        firebase.firestore().collection('user').onSnapshot((/**
         * @param {?} doc
         * @return {?}
         */
        (doc) => {
            //console.log(doc)
            doc.forEach((/**
             * @param {?} docs
             * @return {?}
             */
            (docs) => {
                console.log(docs);
                //console.log(doc);
                this.data = docs.data();
                // console.log(this.data())
                console.log(this.data.uploadImage);
            }));
        }));
        //console.log(firebase.database().app)
        // this.data.get().then(documentSnapshot => {
        //   if (documentSnapshot.exists) {
        //     console.log(documentSnapshot);
        //   }
        // });
    }
    /**
     * @return {?}
     */
    onLogOut() {
        this.auth.logout();
        this.router.navigate[('/')];
    }
}
HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'enl-home',
                template: "\n<div class=\"container container-fluid\">\n  <div class=\"col col-mg-6\">\n    <p>Name : {{data?.name}}</p>\n    <p>email : {{data?.email}}</p>\n    <img [src] =\"data?.uploadImage\" height=\"100px\" width=\"100px\">\n    <p>organization : {{data?.organization}}</p>\n    <p>Country : {{data?.selectCountry}}</p>\n    <p>state : {{data?.selectState}}</p>\n    <p>city : {{data?.selectCity}}</p>\n    \n  </div>\n  <div class=\"btn btn-primary\">\n  <button type=\"button\" (click)=\"onLogOut()\"><a href=\"/\">Logout</a></button>\n  </div>\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
HomeComponent.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: AngularFirestore }
];
if (false) {
    /** @type {?} */
    HomeComponent.prototype.user;
    /** @type {?} */
    HomeComponent.prototype.url;
    /** @type {?} */
    HomeComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    HomeComponent.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    HomeComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    HomeComponent.prototype.db;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly92ZG9pdC8iLCJzb3VyY2VzIjpbImxpYi91c2VyL2hvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRyxNQUFNLGlCQUFpQixDQUFBO0FBQzlDLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQTtBQVV6RCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBSXhCLFlBQW9CLElBQWtCLEVBQVcsTUFBYyxFQUFVLEVBQW9CO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQWM7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBa0I7UUFIOUYsU0FBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFLbEMsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNwQyx3Q0FBd0M7UUFDeEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtZQUN4RCxrQkFBa0I7WUFDbEIsR0FBRyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QiwyQkFBMkI7Z0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVwQyxDQUFDLEVBQUMsQ0FBQTtRQUdKLENBQUMsRUFBQyxDQUFBO1FBRUYsc0NBQXNDO1FBQ3RDLDZDQUE2QztRQUM3QyxtQ0FBbUM7UUFDbkMscUNBQXFDO1FBQ3JDLE1BQU07UUFDTixNQUFNO0lBR1IsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3QixDQUFDOzs7WUEzQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpakJBQW9DOzthQUVyQzs7OztZQVpRLFdBQVc7WUFFWixNQUFNO1lBQ0wsZ0JBQWdCOzs7O0lBV3hCLDZCQUFtQzs7SUFDbkMsNEJBQUc7O0lBQ0gsNkJBQUs7Ozs7O0lBQ1EsNkJBQTBCOzs7OztJQUFHLCtCQUFzQjs7Ozs7SUFBRSwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJ1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlJ1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbmwtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcbiB1cmxcbiBkYXRhO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGggOiBBdXRoU2VydmljZSAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZGI6IEFuZ3VsYXJGaXJlc3RvcmUpIHsgXG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICBcbiAgICB0aGlzLnVybCA9IHRoaXMucm91dGVyLnVybC5zbGljZSgxMilcbiAgICAvL3RoaXMuZGF0YSA9IHRoaXMuZGIuY29sbGVjdGlvbigndXNlcicpXG4gICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigndXNlcicpLm9uU25hcHNob3QoKGRvYyk9PntcbiAgICAgIC8vY29uc29sZS5sb2coZG9jKVxuICAgICAgZG9jLmZvckVhY2goKGRvY3MpID0+e1xuICAgICAgICBjb25zb2xlLmxvZyhkb2NzKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGRvYyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRvY3MuZGF0YSgpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YSgpKVxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS51cGxvYWRJbWFnZSk7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICBcblxuICAgIH0pXG4gICAgXG4gICAgLy9jb25zb2xlLmxvZyhmaXJlYmFzZS5kYXRhYmFzZSgpLmFwcClcbiAgICAvLyB0aGlzLmRhdGEuZ2V0KCkudGhlbihkb2N1bWVudFNuYXBzaG90ID0+IHtcbiAgICAvLyAgIGlmIChkb2N1bWVudFNuYXBzaG90LmV4aXN0cykge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhkb2N1bWVudFNuYXBzaG90KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBcblxuICB9XG4gIG9uTG9nT3V0KCl7XG4gICAgdGhpcy5hdXRoLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlWygnLycpXVxuICB9XG5cbn1cbiJdfQ==