import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';
import { TranslatedUrls } from '../../utils/TranslatedUrls';

@Component({
  selector: 'app-header',
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  getLocale(): string {
    return this.languageService.getActiveLanguage();
  }

  getUsersUrl(): string {
    return this.languageService.getUsersUrl();
  }

  getTranslatedUrls(): TranslatedUrls {
    return this.languageService.getTranslatedUrls();
  }
}
