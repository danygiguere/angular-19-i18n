import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { TranslatedUrls } from '../app/utils/TranslatedUrls';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  
  constructor(
    private translocoService: TranslocoService,
    private router: Router
  ) {}

  setActiveLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }

  getActiveLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  getUsersUrl(): string {
    const lang = this.translocoService.getActiveLang();
    return lang === 'en' ? '/en/users' : '/fr/utilisateurs';
  }

  getTranslatedUrls(): TranslatedUrls {
    const url = this.router.routerState.snapshot.url;
    if (url === '/en' || url === '/fr') {
      return new TranslatedUrls('/en', '/fr');
    } else if (url === '/en/users' || url === '/fr/utilisateurs') {
      return new TranslatedUrls('/en/users', '/fr/utilisateurs');
    } else {
      return new TranslatedUrls('/en', '/fr'); // Return a default value in case of unsupported URL
    }
  }
}
