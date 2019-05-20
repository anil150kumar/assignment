import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClientModule} from '@angular/common/http'
import { AngularFireModule} from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFirestore} from '@angular/fire/firestore'

import { AngularFireAuth} from '@angular/fire/auth'
import { RegistrationComponent } from './user/registration/registration.component';
//import { UpdateUserComponent } from './user/update-user/update-user.component';
import { environment } from './environment/environment';
import { CountriesService} from './user/update.service'
import { AngularFireStorageModule } from 'angularfire2/storage';
import { LoginComponent } from './user/login/login.component';
import { AuthService} from './user/auth.service';
import { HomeComponent } from './user/home/home.component'
import { AuthGuard } from './user/auth-guard.service';
import * as firebase from 'firebase';

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

@NgModule({
  declarations: [RegistrationComponent, LoginComponent, HomeComponent],
  imports: [ReactiveFormsModule,
    CommonModule ,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),

    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule

  ],
  providers:[AngularFirestore,CountriesService,AngularFireStorageModule,
    AuthService,AuthGuard,AngularFireAuth
  ],
  exports: [RegistrationComponent,HomeComponent]
})
export class VdoitModule { }
