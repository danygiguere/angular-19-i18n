import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { PageComponent } from '../../components/page-component';

@Component({
  selector: 'app-users',
  imports: [TranslocoModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent extends PageComponent {}
