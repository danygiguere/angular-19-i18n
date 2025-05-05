import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/LanguageService';

@Component({
  selector: 'app-header',
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: LanguageService) {}

  getUsersUrl(): string {
    return this.languageService.getUsersUrl();
  }

  getCurrentUrlInEnglish(): string {
    return this.languageService.getCurrentUrlInBothLanguages().english;
  }

  getCurrentUrlInFrench(): string {
    return this.languageService.getCurrentUrlInBothLanguages().french;
  }
}
