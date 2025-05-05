import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/LanguageService';

@Component({
  selector: 'app-users',
  imports: [TranslocoModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    const lang = this.router.url.split('/')[1];
    this.languageService.switchLanguage(lang);
  }
}
