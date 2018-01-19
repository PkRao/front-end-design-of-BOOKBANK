import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'; 
import { Router} from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    formdata;

    constructor(private router: Router) {

    }

  ngOnInit() {
      this.formdata = new FormGroup({
      });

  }
  onClickSubmit(data) {
     
      this.router.navigate(['app-upload']);


  }


  onClickButton() {
      // console.log("Im in Sign In");

      this.router.navigate(['app-download']);


  }
  onClick(){
    this.router.navigate(['app-userlogin']);
  }


}
