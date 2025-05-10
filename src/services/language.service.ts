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
    console.log('Current URL:', url);
    if (url === '/en' || url === '/fr') {
      return new TranslatedUrls('/en', '/fr');
    } else if (url === '/en/users' || url === '/fr/utilisateurs') {
      return new TranslatedUrls('/en/users', '/fr/utilisateurs');
    } else if (url === '/en/sign-in' || url === '/fr/se-connecter') {
      return new TranslatedUrls('/en/sign-in', '/fr/se-connecter');
    } else if (url === '/en/sign-up' || url === '/fr/sinscrire') {
      return new TranslatedUrls('/en/sign-up', '/fr/sinscrire');
    }  else {
      const cleanUrl = url.replace(/^\/(en|fr)/, '');
      return new TranslatedUrls(`/en${cleanUrl}`, `/fr${cleanUrl}`); // Return a default value in case of unsupported URL
    }
  }
}
