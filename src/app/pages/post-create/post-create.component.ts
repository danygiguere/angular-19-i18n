import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-post-create',
  imports: [TranslocoModule, ReactiveFormsModule, CommonModule],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  form: FormGroup;
  submitted = false;
  formData: any;

 constructor(private languageService: LanguageService, private fb: FormBuilder, private cookieService: CookieService) {
    languageService.setActiveLanguage();
     this.form = this.fb.group({
      title: [''],
      description: ['']
    });
  }

   onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
    }
    console.log("formData", this.formData);
   }
}
