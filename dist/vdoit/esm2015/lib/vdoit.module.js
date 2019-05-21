/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegistrationComponent } from './user/registration/registration.component';
import { CountriesService } from './user/update.service';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { LoginComponent } from './user/login/login.component';
import { AuthService } from './user/auth.service';
import { HomeComponent } from './user/home/home.component';
import { AuthGuard } from './user/auth-guard.service';
import * as firebase from 'firebase';
/** @type {?} */
export const firebaseConfig = {
    apiKey: "AIzaSyCGPXlnA1hFVa1CeTSlOCwKEYsMypTTOSw",
    authDomain: "vdoit-507fc.firebaseapp.com",
    databaseURL: "https://vdoit-507fc.firebaseio.com",
    projectId: "vdoit-507fc",
    storageBucket: "vdoit-507fc.appspot.com",
    messagingSenderId: "1049933201863",
    appId: "1:1049933201863:web:618fb38251a368cf"
};
firebase.initializeApp(firebaseConfig);
export class VdoitModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmRvaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdmRvaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFBO0FBQ2hELE9BQU8sRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFBO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQTtBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUduRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7O0FBRXJDLE1BQU0sT0FBTyxjQUFjLEdBQUc7SUFDNUIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsNkJBQTZCO0lBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQsU0FBUyxFQUFFLGFBQWE7SUFDeEIsYUFBYSxFQUFFLHlCQUF5QjtJQUN4QyxpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDLEtBQUssRUFBRSxzQ0FBc0M7Q0FDOUM7QUFFRCxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBbUJ2QyxNQUFNLE9BQU8sV0FBVzs7O1lBakJ2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQztnQkFDcEUsT0FBTyxFQUFFLENBQUMsbUJBQW1CO29CQUMzQixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztvQkFFL0MseUJBQXlCO29CQUN6Qix3QkFBd0I7b0JBQ3hCLFdBQVc7aUJBRVo7Z0JBQ0QsU0FBUyxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsd0JBQXdCO29CQUNuRSxXQUFXLEVBQUMsU0FBUyxFQUFDLGVBQWU7aUJBQ3RDO2dCQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFDLGFBQWEsQ0FBQzthQUMvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuaW1wb3J0IHsgQW5ndWxhckZpcmVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUnXG5pbXBvcnQgeyBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9maXJlL2RhdGFiYXNlJ1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZX0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnXG5cbmltcG9ydCB7IEFuZ3VsYXJGaXJlQXV0aH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9hdXRoJ1xuaW1wb3J0IHsgUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Jztcbi8vaW1wb3J0IHsgVXBkYXRlVXNlckNvbXBvbmVudCB9IGZyb20gJy4vdXNlci91cGRhdGUtdXNlci91cGRhdGUtdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcbmltcG9ydCB7IENvdW50cmllc1NlcnZpY2V9IGZyb20gJy4vdXNlci91cGRhdGUuc2VydmljZSdcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJmaXJlMi9zdG9yYWdlJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZX0gZnJvbSAnLi91c2VyL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL2hvbWUvaG9tZS5jb21wb25lbnQnXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL3VzZXIvYXV0aC1ndWFyZC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q0dQWGxuQTFoRlZhMUNlVFNsT0N3S0VZc015cFRUT1N3XCIsXG4gIGF1dGhEb21haW46IFwidmRvaXQtNTA3ZmMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdmRvaXQtNTA3ZmMuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInZkb2l0LTUwN2ZjXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmRvaXQtNTA3ZmMuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTA0OTkzMzIwMTg2M1wiLFxuICBhcHBJZDogXCIxOjEwNDk5MzMyMDE4NjM6d2ViOjYxOGZiMzgyNTFhMzY4Y2ZcIlxufTtcblxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1JlZ2lzdHJhdGlvbkNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIEhvbWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUgLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVNb2R1bGUuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyksXG5cbiAgICBBbmd1bGFyRmlyZURhdGFiYXNlTW9kdWxlLFxuICAgIEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuXG4gIF0sXG4gIHByb3ZpZGVyczpbQW5ndWxhckZpcmVzdG9yZSxDb3VudHJpZXNTZXJ2aWNlLEFuZ3VsYXJGaXJlU3RvcmFnZU1vZHVsZSxcbiAgICBBdXRoU2VydmljZSxBdXRoR3VhcmQsQW5ndWxhckZpcmVBdXRoXG4gIF0sXG4gIGV4cG9ydHM6IFtSZWdpc3RyYXRpb25Db21wb25lbnQsSG9tZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVmRvaXRNb2R1bGUgeyB9XG4iXX0=