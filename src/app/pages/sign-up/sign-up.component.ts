import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../../components/page-component';

@Component({
  selector: 'app-sign-up',
  imports: [TranslocoModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent extends PageComponent {}
