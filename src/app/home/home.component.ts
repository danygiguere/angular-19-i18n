import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/LanguageService';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    const lang = this.router.url.split('/')[1];
    this.languageService.switchLanguage(lang);
  }
}
