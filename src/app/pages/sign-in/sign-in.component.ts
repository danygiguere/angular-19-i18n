import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../../components/page-component';

@Component({
  selector: 'app-sign-in',
  imports: [TranslocoModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent extends PageComponent {}
