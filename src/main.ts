import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from "@sentry/angular";

// main.ts will look at app.module.ts
// put your DSN here from the Sentry portal
Sentry.init({ dsn: "https://9f18d01544d4419684e031109fa93c1c@o437764.ingest.sentry.io/5400774" });

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
