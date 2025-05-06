import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/LanguageService';
import { TranslatedUrls } from '../../utils/TranslatedUrls';

@Component({
  selector: 'app-header',
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  get locale(): string {
    return this.languageService.getActiveLanguage();
  }

  get usersUrl(): string {
    return this.languageService.getUsersUrl();
  }

  get translatedUrls(): TranslatedUrls {
    return this.languageService.getTranslatedUrls();
  }
}
