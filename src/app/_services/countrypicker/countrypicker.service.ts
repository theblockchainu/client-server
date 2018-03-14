import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryPickerService {

  constructor(private http: HttpClient, private config: AppConfig
    , private route: ActivatedRoute, public router: Router) {
  }

  public getCountries() {
    return this.http.get(this.config.apiUrl + '/api/countries')
      .map((response: any) => {
        return response;
      });
  }

}
