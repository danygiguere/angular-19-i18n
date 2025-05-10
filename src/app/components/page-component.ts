import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  imports: [],
  template: '',
})
export class PageComponent implements OnInit {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const lang = this.router.url.split('/')[1];
    this.languageService.setActiveLanguage(lang);
  }
}
