import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import * as moment from 'moment';

@Injectable()
export class CookieUtilsService {

  constructor(private _cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  public getValue(key: string) {
    const cookieValueCrypt = this._cookieService.get(key);
    if (cookieValueCrypt) {
      const cookieValue = cookieValueCrypt.split(/[ \:.]+/);
      console.log('getting cookie value of ' + key + ' as : ' + cookieValue);
      return cookieValue.length > 1 ? cookieValue[1] : cookieValue[0];
    } else {
      return '';
    }
  }

  public setValue(name: string, value: string) {
    this._cookieService.remove(name, {
      domain: 'localhost',
      path: '/'
    });
    this._cookieService.put(name, value, {
      domain: 'localhost',
      path: '/',
      expires: moment().add(2, 'days').toDate()
    });

    // moment().add(2, 'days').toDate(), '/', 'localhost'
  }

  public deleteValue(key) {
    this._cookieService.remove(key);
  }

}
