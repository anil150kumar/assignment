import { OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
export declare class HomeComponent implements OnInit {
    private auth;
    private router;
    private db;
    user: firebase.User;
    url: any;
    data: any;
    constructor(auth: AuthService, router: Router, db: AngularFirestore);
    ngOnInit(): void;
    onLogOut(): void;
}
