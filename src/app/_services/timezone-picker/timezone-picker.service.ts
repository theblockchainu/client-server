import { Injectable } from '@angular/core';
import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimezonePickerService {

  constructor(private http: HttpClient, public config: AppConfig) {
  }

  public getTimezones(filter: string) {
    return this.http.get(this.config.apiUrl + '/api/timezones?filter=' + filter)
      .map((response: any) => {
        return response;
      });
  }

}
