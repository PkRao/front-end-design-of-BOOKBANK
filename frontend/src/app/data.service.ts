import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor() { }

    myfun(Udata) {
        console.log("I m in data srvice " + Udata.username);
    }

}
