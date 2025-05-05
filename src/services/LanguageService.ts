import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translocoService: TranslocoService) {}

  setActiveLanguage(language: string) {
    this.translocoService.setActiveLang(language);
  }

  switchLanguage(language: string) {
    // logic to get translated url here
    this.translocoService.setActiveLang(language);
  }
}
