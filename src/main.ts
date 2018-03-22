import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { BrowserAppModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(BrowserAppModule);
});
