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

  getUsersUrl(): string {
    const lang = this.translocoService.getActiveLang();
    return lang === 'en' ? '/en/users' : '/fr/utilisateurs';
  }

  getCurrentUrlInBothLanguages(): TranslatedUrls {
    const url = this.router.routerState.snapshot.url;
    let enPath = '';
    let frPath = '';
    if (url === '/en' || url === '/fr') {
      enPath = '/en';
      frPath = '/fr';
    } else if (url === '/en/users' || url === '/fr/utilisateurs') {
      enPath = '/en/users';
      frPath = '/fr/utilisateurs';
    }
    return new TranslatedUrls(enPath, frPath);
  }
}
