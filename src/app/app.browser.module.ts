import { NgModule } from '@angular/core';
import { BrowserCookiesModule } from '@ngx-utils/cookies/src/browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CookieUtilsBrowserService } from './_services/cookieUtils-browser/cookie-utils-browser.service';

@NgModule({
  imports: [
    AppModule,
    BrowserCookiesModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [CookieUtilsBrowserService]
})
export class BrowserAppModule { }
