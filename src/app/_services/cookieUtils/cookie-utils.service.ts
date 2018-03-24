import {environment} from '../../../environments/environment';
import {Inject, Injectable} from '@angular/core';
import * as moment from 'moment';
import {CookieService} from 'angular2-cookie/core';

@Injectable()
export class CookieUtilsService {
    public envVariable;

  constructor(
    public _cookieService: CookieService
  ) {
      this.envVariable = environment;
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
      domain: environment.host,
      path: '/'
    });
    this._cookieService.put(name, value, {
      domain: environment.host,
      path: '/',
      expires: moment().add(2, 'days').toDate()
    });


    // moment().add(2, 'days').toDate(), '/', 'localhost'
  }

  public deleteValue(key) {
    this._cookieService.remove(key, {
        domain: environment.host,
        path: '/'
    });
  }

}
