import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../../components/page-component';

@Component({
  selector: 'app-page-not-found',
  imports: [TranslocoModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent extends PageComponent {}
