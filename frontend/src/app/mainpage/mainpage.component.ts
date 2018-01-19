import { Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { DataService } from '../data.service';

@Component({
    selector: 'app-mainpage',
    templateUrl: './mainpage.component.html',
    styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {
    formdata;
    cutomerdata;
    registerData = {
        firstname: "fname",
        lastname: "lname",
        address: "add",
        phonenumber:"phone",
        email: "email",
        password:"password"
    }
    constructor(private http: Http, private router: Router) { }
    stateCtrl: FormControl;
    ngOnInit() {
        this.formdata = new FormGroup({
            fname: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])),
            lname: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])),
            address: new FormControl(""),
            phoneno: new FormControl(""),
            email: new FormControl(""),
            password: new FormControl("")
        });
    }
    onClickSubmit() {

        this.router.navigate(['app-userlogin']);
        
    }
    onClickButton() {
        this.router.navigate(['app-userlogin']);
    }
}