import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-page-not-found',
  imports: [TranslocoModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  constructor(private languageService: LanguageService) {
    languageService.setActiveLanguage();
  }
}
