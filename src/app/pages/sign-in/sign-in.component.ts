import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [TranslocoModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  form: FormGroup;
  submitted = false;
  formData: any;

  authService = inject(AuthService);
  
  constructor(private languageService: LanguageService, private fb: FormBuilder) {
    languageService.setActiveLanguage();
     this.form = this.fb.group({
      email: [''],
      password: ['']
    });
  }

   onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
    }
    console.log("onSubmit", this.formData)
    this.authService.signIn(this.formData).subscribe({
      next: (response) => {
        console.log("response", response)
        // On sauvegarde le token dans un cookie
   
      },
      error: (e) => {
        
      }
    });
   }

}
