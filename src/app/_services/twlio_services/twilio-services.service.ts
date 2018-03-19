import { Injectable } from '@angular/core';
import { RequestHeaderService } from '../requestHeader/request-header.service';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../app.config';
import { CookieUtilsService } from '../cookieUtils/cookie-utils.service';


@Injectable()
export class TwilioServicesService {
  public userId;
  private options;

  constructor(
    public _requestHeaderService: RequestHeaderService,
    private http: HttpClient,
    public config: AppConfig,
    private _cookieService: CookieUtilsService
  ) {
    this.userId = this._cookieService.getValue('userId');
    this.options = this._requestHeaderService.getOptions();
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
