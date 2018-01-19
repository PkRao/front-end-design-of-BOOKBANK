import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';

import {HttpModule} from "@angular/http";
import {MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DataService } from './data.service';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { SecondComponent } from './second/second.component';
import { SearchComponent } from './search/search.component';
//import { SecondpageComponent } from './secondpage/secondpage.component';
const appRoutes: Routes = [
    {
        path: '',
        component: UserloginComponent
    },
    {
        path: 'app-mainpage',
        component: MainpageComponent
    },
    {
        path: 'app-upload',
        component: UploadComponent
    },
    
    {
        path: 'app-second',
        component: SecondComponent
    },
    {
        path: 'app-userlogin',
        component: UserloginComponent
    },
    {
        path: 'app-download',
        component: DownloadComponent
    },
    {
        path: 'app-search',
        component: SearchComponent
    }


];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        UserloginComponent,
        MainpageComponent,
        UploadComponent,
        SecondComponent,
        DownloadComponent,
        SearchComponent
    ],

    imports: [
        BrowserModule,
        ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
        BrowserAnimationsModule,
        HttpModule,
        MatTableModule,
        MatInputModule
    ],

    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }