import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


import { AppConfig } from '../../app.config';
import { RequestHeaderService } from '../requestHeader/request-header.service';
import { CookieUtilsService } from '../cookieUtils/cookie-utils.service';
@Injectable()
export class InboxService {
  public key = 'userId';
  private options;

  constructor(private http: HttpClient,
    public config: AppConfig,
    private route: ActivatedRoute,
    public router: Router,
    public _requestHeaderService: RequestHeaderService,
    private _cookieUtilsService: CookieUtilsService
  ) {
    this.options = this._requestHeaderService.getOptions();
  }

  getRoomData() {
    const userId = this._cookieUtilsService.getValue(this.key);
    const query = { 'include': ['collection', { 'messages': { 'peer': 'profiles' } }, { 'participants': 'profiles' }] };
    if (userId) {
      return this.http.get(this.config.apiUrl + '/api/peers/' + userId + '/joinedRooms?filter=' + JSON.stringify(query), this.options)
        .map(
          (response: any) => response
        );
    }
  }

  postMessage(roomId, body) {
    return this.http.post(this.config.apiUrl + '/api/rooms/' + roomId + '/messages', body, this.options)
      .map((response: any) => response);
  }

}
