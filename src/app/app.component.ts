import { Component }       from '@angular/core';
import { FiltersService } from './filters.service';
import { FiltersBase }    from './filters-base';
import { Observable }      from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Yugi Price Finder</h2>
      <app-dynamic-form [filters]="filters$ | async"></app-dynamic-form>
    </div>
  `,
  providers:  [FiltersService]
})
export class AppComponent {
  filters$: Observable<FiltersBase<any>[]>;

  constructor(private service: FiltersService) {
    this.filters$ = service.getFilters();
  }
}
