

import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {CookiesService} from '@ngx-utils/cookies';
import * as moment from 'moment';

@Injectable()
export class CookieUtilsService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public _cookieService: CookiesService
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
