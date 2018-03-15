import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { AppConfig } from '../../app.config';

@Injectable()
export class LanguagePickerService {

    constructor(private http: HttpClient, public config: AppConfig
        , private route: ActivatedRoute, public router: Router) {
    }

    public getLanguages() {

        return this.http.get(this.config.apiUrl + '/api/languages')
            .map((response: any) => {
                return response;
            });
    }

}
