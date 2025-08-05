import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../../../services/language.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-posts-create',
  imports: [TranslocoModule, ReactiveFormsModule, CommonModule],
  templateUrl: './posts-create.component.html',
  styleUrl: './posts-create.component.scss'
})
export class PostsCreateComponent {
  form: FormGroup;
  submitted = false;
  formData: any;

  postService = inject(PostService);

 constructor(private languageService: LanguageService, private fb: FormBuilder, private cookieService: CookieService) {
    languageService.setActiveLanguage();
     this.form = this.fb.group({
      title: [''],
      description: ['']
    });
  }

   async onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      this.formData = this.form.value;
    }
    try {
      const observable = await this.postService.create(this.formData);
      observable.subscribe({
        next: (response) => {
          console.log("response", response);
        },
        error: (e) => {
          console.error('PostsCreateComponent error handler:', e);
        }
      });
    } catch (e) {
      console.error('PostsCreateComponent error handler:', e);
    }
   }
}
