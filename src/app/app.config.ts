import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DemoComponent } from './demo/demo.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), DemoComponent]
};
