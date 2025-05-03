import { inject, Injectable, Injector } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  getTranslation() {
    const router = this.injector.get(Router);
    const langFromUrl = router.url.split('/')[1];
    // return this.http.get<Translation>(`/assets/i18n/${langFromUrl}.json`);
    return this.http.get<Translation>(`/assets/i18n/en.json`);
    // return this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/${lang}.json`);
  }

}
