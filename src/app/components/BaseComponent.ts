import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/LanguageService';

@Component({
  template: '',
})
export class BaseComponent implements OnInit {
  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    const lang = this.router.url.split('/')[1];
    this.languageService.setActiveLanguage(lang);
  }
}
