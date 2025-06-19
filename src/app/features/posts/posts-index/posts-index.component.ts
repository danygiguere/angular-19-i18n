import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: 'app-posts-index',
  imports: [TranslocoModule],
  templateUrl: './posts-index.component.html',
  styleUrl: './posts-index.component.scss'
})
export class PostsIndexComponent {
  constructor(private languageService: LanguageService) {
      languageService.setActiveLanguage();
    }
}
