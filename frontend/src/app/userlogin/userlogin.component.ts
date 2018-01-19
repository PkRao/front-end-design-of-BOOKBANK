import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'app-userlogin',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})

export class UserloginComponent implements OnInit {
    formdata;
    userData = {
        username:"admin",
        password:"password"
    }
    constructor(private router: Router, private datasrvs: DataService ) { }
    ngOnInit() {
        this.formdata = new FormGroup({
            uname: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(10)
            ])),
            passwd: new FormControl("", this.passwordvalidation)
        });
    }
    passwordvalidation(formcontrol) {
        if (formcontrol.value.length < 5) {
            return { "passwd": true };
        }
    }
  

    onClickSubmit(data) {
        console.log(this.userData);
        this.datasrvs.myfun(this.userData);
        this.router.navigate(['app-second']);
      
    
    }

    
    onClickButton(){
       // console.log("Im in Sign In");

           this.router.navigate(['app-mainpage']);
        
    }
   
}

