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
export var firebaseConfig = {
    apiKey: "AIzaSyCGPXlnA1hFVa1CeTSlOCwKEYsMypTTOSw",
    authDomain: "vdoit-507fc.firebaseapp.com",
    databaseURL: "https://vdoit-507fc.firebaseio.com",
    projectId: "vdoit-507fc",
    storageBucket: "vdoit-507fc.appspot.com",
    messagingSenderId: "1049933201863",
    appId: "1:1049933201863:web:618fb38251a368cf"
};
firebase.initializeApp(firebaseConfig);
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
export { VdoitModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmRvaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdmRvaXQvIiwic291cmNlcyI6WyJsaWIvdmRvaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFBO0FBQ2hELE9BQU8sRUFBRSx5QkFBeUIsRUFBQyxNQUFNLHdCQUF3QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFBO0FBRXpELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQTtBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUduRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQTtBQUN2RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7O0FBRXJDLE1BQU0sS0FBTyxjQUFjLEdBQUc7SUFDNUIsTUFBTSxFQUFFLHlDQUF5QztJQUNqRCxVQUFVLEVBQUUsNkJBQTZCO0lBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7SUFDakQsU0FBUyxFQUFFLGFBQWE7SUFDeEIsYUFBYSxFQUFFLHlCQUF5QjtJQUN4QyxpQkFBaUIsRUFBRSxlQUFlO0lBQ2xDLEtBQUssRUFBRSxzQ0FBc0M7Q0FDOUM7QUFFRCxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRXZDO0lBQUE7SUFpQjJCLENBQUM7O2dCQWpCM0IsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUM7b0JBQ3BFLE9BQU8sRUFBRSxDQUFDLG1CQUFtQjt3QkFDM0IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7d0JBRS9DLHlCQUF5Qjt3QkFDekIsd0JBQXdCO3dCQUN4QixXQUFXO3FCQUVaO29CQUNELFNBQVMsRUFBQyxDQUFDLGdCQUFnQixFQUFDLGdCQUFnQixFQUFDLHdCQUF3Qjt3QkFDbkUsV0FBVyxFQUFDLFNBQVMsRUFBQyxlQUFlO3FCQUN0QztvQkFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUM7aUJBQy9DOztJQUMwQixrQkFBQztDQUFBLEFBakI1QixJQWlCNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnXG5pbXBvcnQgeyBBbmd1bGFyRmlyZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZmlyZSdcbmltcG9ydCB7IEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvZGF0YWJhc2UnXG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSdcblxuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRofSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3VzZXIvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQnO1xuLy9pbXBvcnQgeyBVcGRhdGVVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi91c2VyL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgQ291bnRyaWVzU2VydmljZX0gZnJvbSAnLi91c2VyL3VwZGF0ZS5zZXJ2aWNlJ1xuaW1wb3J0IHsgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlIH0gZnJvbSAnYW5ndWxhcmZpcmUyL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlfSBmcm9tICcuL3VzZXIvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL3VzZXIvaG9tZS9ob21lLmNvbXBvbmVudCdcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXNlci9hdXRoLWd1YXJkLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDR1BYbG5BMWhGVmExQ2VUU2xPQ3dLRVlzTXlwVFRPU3dcIixcbiAgYXV0aERvbWFpbjogXCJ2ZG9pdC01MDdmYy5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92ZG9pdC01MDdmYy5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidmRvaXQtNTA3ZmNcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJ2ZG9pdC01MDdmYy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDQ5OTMzMjAxODYzXCIsXG4gIGFwcElkOiBcIjE6MTA0OTkzMzIwMTg2Mzp3ZWI6NjE4ZmIzODI1MWEzNjhjZlwiXG59O1xuXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUmVnaXN0cmF0aW9uQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgSG9tZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSAsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBBbmd1bGFyRmlyZU1vZHVsZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKSxcblxuICAgIEFuZ3VsYXJGaXJlRGF0YWJhc2VNb2R1bGUsXG4gICAgQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG5cbiAgXSxcbiAgcHJvdmlkZXJzOltBbmd1bGFyRmlyZXN0b3JlLENvdW50cmllc1NlcnZpY2UsQW5ndWxhckZpcmVTdG9yYWdlTW9kdWxlLFxuICAgIEF1dGhTZXJ2aWNlLEF1dGhHdWFyZCxBbmd1bGFyRmlyZUF1dGhcbiAgXSxcbiAgZXhwb3J0czogW1JlZ2lzdHJhdGlvbkNvbXBvbmVudCxIb21lQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBWZG9pdE1vZHVsZSB7IH1cbiJdfQ==