import { Injectable }       from '@angular/core';
import { DropdownFilters } from './filters-dropdown';
import { FiltersBase }     from './filters-base';
import { TextboxFilters }  from './filters-textbox';
import { of } from 'rxjs';

@Injectable()
export class FiltersService {

  // TODO: get from a remote source of filters metadata
  getFilters() {

    let filters: FiltersBase<string>[] = [

      new DropdownFilters({
        key: 'condition',
        label: 'Condicion',
        value: '',
        options: [
          {key: 'NM',  value: 'Near Mint'},
          {key: 'LP',  value: 'LightlyPlayed'},
          {key: 'PL',   value: 'Played'},
          {key: 'HP', value: 'Heavily Played'},
          {key: 'D', value: 'Damaged'}
        ],
        order: 3
      }),

      new TextboxFilters({
        key: 'code',
        label: 'Código de la carta',
        value: 'LOD-000',
        required: true,
        order: 1
      }),

      new DropdownFilters({
        key: 'edition',
        label: 'Edición',
        value: '',
        options: [
          {key: '1st Edition',  value: '1st Edition'},
          {key: 'Unlimited',  value: 'Unlimited'},
          {key: 'Limited Edition',   value: 'Limited Edition'}
        ],
        order: 3
      }),

      new DropdownFilters({
        key: 'website',
        label: 'Website',
        options: [
          {key: 'TYT',  value: 'TYT'},
          {key: 'TCGP',  value: 'TCGP'}
        ],
        order: 3
      }),
    ];

    return of(filters.sort((a, b) => a.order - b.order));
  }


}
