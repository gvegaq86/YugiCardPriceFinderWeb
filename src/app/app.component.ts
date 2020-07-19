import { Component }       from '@angular/core';
import { FiltersService } from './filters.service';
import { FiltersBase }    from './filters-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <html lang="eng">
    <head><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans">
    </head>
    <body>
    <main class="main_div container">
    <div>
      <app-dynamic-form [filters]="filters$ | async"></app-dynamic-form>
    </div>
    </main>
    </body>
    </html>
  `,
  styleUrls: ['./dynamic-form.component.css'],
  providers:  [FiltersService]
})
export class AppComponent {
  filters$: Observable<FiltersBase<any>[]>;

  constructor(private service: FiltersService) {
    this.filters$ = service.getFilters();
  }
}
