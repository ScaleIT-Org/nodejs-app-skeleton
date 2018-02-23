import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppEntryPointModule } from './app.module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppEntryPointModule);
