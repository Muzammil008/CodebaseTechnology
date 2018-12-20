import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the CommunicatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunicatorProvider {

  servicePath: string="http://175.107.202.250:8083/";

  constructor(public http: HttpClient) {
    console.log('Hello CommunicatorProvider Provider');
  }
  getDataNoAuthenticate(url) {
    return this.http.get(url);
  }
  PostDataNoAuthenticate(url: string, method: string, data: any) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(this.servicePath + method, data, { headers });
  }

}
