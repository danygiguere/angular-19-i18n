import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../../services/language.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { PostService } from '../../../services/post.service';


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

  postService = inject(PostService);

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
    this.postService.create(this.formData).subscribe({
      next: (response) => {

        console.log("response", response);
        
      },
      error: (e) => {
        
      }
    });
   }
}
