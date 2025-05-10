import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../../components/page-component';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends PageComponent {}
