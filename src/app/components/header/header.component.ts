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

  isMenuHidden: String = "hidden";

  constructor(private languageService: LanguageService) {}

  getUsersUrls(): string {
    return this.languageService.getUsersUrls();
  }

  getSignInUrls(): string {
    return this.languageService.getSignInUrls();
  }

  getSignUpUrls(): string {
    return this.languageService.getSignUpUrls();
  }

  getTranslatedUrls(): TranslatedUrls {
    return this.languageService.getTranslatedUrls();
  }

  public toggleMenu(): String {
    if (this.isMenuHidden == 'hidden') {
      this.isMenuHidden = '';
      return '';
    } 
    this.isMenuHidden = 'hidden';
    return 'hidden';
  }
}
