import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { AuthInterceptor } from './interceptors/AuthInterceptor';
import { CredentialsInterceptor } from './interceptors/CredentialsInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()), 
    provideHttpClient(withFetch(), withInterceptorsFromDi()), 
    provideTransloco({
        config: { 
          availableLangs: ['en', 'fr'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CredentialsInterceptor,
        multi: true,
      }
    ]
};
