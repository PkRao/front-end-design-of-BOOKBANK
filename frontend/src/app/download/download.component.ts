import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
   
formdata;
  constructor(private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
    });
  }
 
  cancelDownload() {
    this.router.navigate(['app-second']);
}
cancel(){
  this.router.navigate(['app-userlogin']);
}
search() {
  this.router.navigate(['app-search']);
}
}
