import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { CookieUtilsBrowserService } from '../cookieUtils-browser/cookie-utils-browser.service';
import * as moment from 'moment';
import { Injector } from '@angular/core';

@Injectable()
export class CookieUtilsService {

  private _cookieUtilsBrowserService: CookieUtilsBrowserService;
  private isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private injector: Injector
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this._cookieUtilsBrowserService = <CookieUtilsBrowserService>this.injector.get(CookieUtilsBrowserService);
    }
  }

  public getValue(key: string) {

    if (this.isBrowser) {
      return this._cookieUtilsBrowserService.getValue(key);
    }
    if (!this.isBrowser) {
      return '';
    }
  }

  public setValue(name: string, value: string) {
    if (this.isBrowser) {
      this._cookieUtilsBrowserService.setValue(name, value);
    }
  }

  public deleteValue(key) {
    if (this.isBrowser) {
      this._cookieUtilsBrowserService.deleteValue(key);
    }
  }

}
