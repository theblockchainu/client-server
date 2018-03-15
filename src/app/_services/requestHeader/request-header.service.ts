import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';

@Injectable()
export class RequestHeaderService {

  constructor(
    private http: HttpClient,
    public config: AppConfig) {
  }

  getOptions() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    return options;
  }

}
