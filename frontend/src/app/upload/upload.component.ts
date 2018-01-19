import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    formdata;
    constructor(private router: Router) { }

  ngOnInit() {

      this.formdata = new FormGroup({
      });

  }
  cancelUpload() {
      this.router.navigate(['app-second']);
  }
  cancel(){
    this.router.navigate(['app-userlogin']);
  }

}
