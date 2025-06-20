import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuHidden: String = 'hidden';

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef
  ) {}

  changeLanguage(lang: string): string {
    console.log('Changing language to:', lang);
    return this.languageService.changeLanguage(lang as 'en' | 'fr');
  } 

  public toggleMenu(): String {
    if (this.isMenuHidden == 'hidden') {
      this.isMenuHidden = '';
      return '';
    }
    this.isMenuHidden = 'hidden';
    return 'hidden';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuHidden = 'hidden';
    }
  }
  
}
