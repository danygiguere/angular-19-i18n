import { inject, Injectable, Injector } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  getTranslation() {
    // would need to catch the Routes param data: { lang: 'en' } here from app.routes.ts
    // the router.url call creates a problem with the header component (because the header component is not a page component).
    // I can fetch the lang param with window.location... but even if I do if(window && window.location) { ... } I get an error: ReferenceError: window is not defined
    if (window && window.location) {
      const lang = window.location.pathname.split('/')[1];
      return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
    const router = this.injector.get(Router);
    const lang = router.url.split('/')[1];
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    // return this.http.get<Translation>(`/assets/i18n/en.json`);
  }

}
