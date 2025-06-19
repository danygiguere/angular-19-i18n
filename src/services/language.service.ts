import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { TranslatedUrls } from '../app/utils/TranslatedUrls';
import en from '../../public/assets/i18n/en.json';
import fr from '../../public/assets/i18n/fr.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  
  constructor(
    private translocoService: TranslocoService,
    private router: Router
  ) {}

  setActiveLanguage() {
    const lang = this.router.url.split('/')[1];
    if (lang == 'en' || lang == 'fr') {
      this.translocoService.setActiveLang(lang);
    }
  }

  getActiveLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  getTranslatedUrls(): TranslatedUrls {
    const url = this.router.routerState.snapshot.url;
    // console.log('Current URL:', url);
    if (url === '/en' || url === '/fr') {
      return new TranslatedUrls('/en', '/fr');
    } else if (url === '/en/users' || url === '/fr/utilisateurs') {
      return new TranslatedUrls('/en/users', '/fr/utilisateurs');
    } else if (url === '/en/sign-in' || url === '/fr/se-connecter') {
      return new TranslatedUrls('/en/sign-in', '/fr/se-connecter');
    } else if (url === '/en/sign-up' || url === '/fr/sinscrire') {
      return new TranslatedUrls('/en/sign-up', '/fr/sinscrire');
    } else if (url === '/en/posts' || url === '/fr/posts') {
      return new TranslatedUrls('/en/posts', '/fr/posts');
    } else if (url === '/en/posts/create' || url === '/fr/posts/creer') {
      return new TranslatedUrls('/en/posts/create', '/fr/posts/creer');
    } else {
      const cleanUrl = url.replace(/^\/(en|fr)/, '');
      return new TranslatedUrls(`/en${cleanUrl}`, `/fr${cleanUrl}`); // Return a default value in case of unsupported URL
    }
  }


}
