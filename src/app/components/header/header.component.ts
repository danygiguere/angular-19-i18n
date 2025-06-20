import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';
import { AuthService } from '../../features/auth/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [TranslocoModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuHidden: String = 'hidden';

  constructor(
    private languageService: LanguageService,
    private elementRef: ElementRef,
    private authService: AuthService
  ) {}

  changeLanguage(lang: string): string {
    //*********************************************************** figure out why this is being called multiple times */
    // console.log('Changing language to:', lang);
    return this.languageService.changeLanguage(lang as 'en' | 'fr');
  } 

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  signOut(): void {
    console.log('Signing out1');
    this.authService.signOut();
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
