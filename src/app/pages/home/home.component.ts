import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { BaseComponent } from '../../components/base-component';

@Component({
  selector: 'app-home',
  imports: [TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends BaseComponent {}
