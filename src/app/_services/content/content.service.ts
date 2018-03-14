import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { CookieService } from 'ngx-cookie-service';

import { AppConfig } from '../../app.config';

import { RequestHeaderService } from '../requestHeader/request-header.service';

@Injectable()
export class ContentService {

  public options;

  constructor(private http: HttpClient, private config: AppConfig,
    private _cookieService: CookieService,
    private route: ActivatedRoute,
    public router: Router,
    private requestHeaderService: RequestHeaderService) {
    this.options = requestHeaderService.getOptions();
  }

  public getEvents(userId: string) {
    return this.http.get(this.config.apiUrl + '/api/peers/' + userId + '/eventCalendar', this.options)
      .map((response: any) => response, (err) => {
        console.log('Error: ' + err);
      });

  }

  public addNewLanguage(name: string) {
    const body = {
      'name': name,
      'code': name
    };
    return this.http.post(this.config.apiUrl + '/api/languages', body, this.options)
      .map((response: any) => response, (err) => {
        console.log('Error: ' + err);
      });
  }

  public getMediaObject(urlString: string) {
    const query = {
      'where':
        {
          url: urlString
        }
    };
    return this.http.get(this.config.apiUrl + '/api/media?filter=' + JSON.stringify(query), this.options)
      .map((response: any) =>
        response,
        (err) => {
          console.log('Error:' + err);
        }
      );
  }



  public createRSVP(contentId, calendarId) {
    const body = {
      'contentId': contentId,
      'calendarId': calendarId
    };
    return this.http
      .post(this.config.apiUrl + '/api/contents/' + contentId + '/rsvps', body, this.options)
      .map((response: any) => response);
  }
}
