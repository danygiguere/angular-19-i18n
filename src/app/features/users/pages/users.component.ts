import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-users',
  imports: [TranslocoModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor(private languageService: LanguageService) {
    languageService.setActiveLanguage();
  }

}
