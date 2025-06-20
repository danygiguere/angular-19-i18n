import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

import en from '../../public/assets/i18n/en.json';
import fr from '../../public/assets/i18n/fr.json';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private routeMap: { [key in 'en' | 'fr']: typeof en.routes } = {
    en: en.routes,
    fr: fr.routes,
  };

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

  changeLanguage(lang: 'en' | 'fr'): string {
    const key = this.getRouteKeyForCurrentUrl();
    if (!key) {
      // Fallback: just switch the language prefix in the URL
      const currentUrl = this.router.url;
      return currentUrl.replace(/^\/(en|fr)/, `/${lang}`);
    }
    // Get the value (route path) for the found key in the target language
    return this.routeMap[lang][key];
  }

  getRouteKeyForCurrentUrl(): keyof typeof en.routes | undefined {
    const currentUrl = this.router.url;
    // Detect current language from URL
    const currentLang = currentUrl.startsWith('/fr') ? 'fr' : 'en';
    const routes = this.routeMap[currentLang];
    return (Object.keys(routes) as Array<keyof typeof routes>).find(
      key => routes[key] === currentUrl
    );
  }


}
// Removed unused t() function as TranslocoService is used for translations.

