import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
export declare class LoginComponent implements OnInit {
    private form;
    private auth;
    signinForm: FormGroup;
    constructor(form: FormBuilder, auth: AuthService);
    ngOnInit(): void;
    onSubmit(): void;
}
