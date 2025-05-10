import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-sign-in',
  imports: [TranslocoModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  constructor(private languageService: LanguageService) {
    languageService.setActiveLanguage();
  }
}
