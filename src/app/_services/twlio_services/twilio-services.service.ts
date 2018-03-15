import { Injectable } from '@angular/core';
import { RequestHeaderService } from '../requestHeader/request-header.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class TwilioServicesService {
  public userId;
  private options;

  constructor(
    public _requestHeaderService: RequestHeaderService,
    private http: HttpClient,
    public config: AppConfig,
    private _cookieService: CookieService
  ) {
    this.userId = this.getCookieValue('userId');
    this.options = this._requestHeaderService.getOptions();
  }

  private getCookieValue(key: string) {
    const cookie = this._cookieService.get(key);
    if (cookie) {
      const cookieValue = this._cookieService.get(key).split(/[ \:.]+/);
      this.userId = cookieValue[1];
    }
    return this.userId;
  }


  /**
   * getToken
   */
  public getToken() {
    return this.http.get(this.config.apiUrl + '/api/vsessions/token', this.options)
      .map(
        (response) => response
      );
  }


}
