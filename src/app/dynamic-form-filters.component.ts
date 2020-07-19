import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FiltersBase }     from './filters-base';

@Component({
  selector: 'app-filters',
  templateUrl: './dynamic-form-filters.component.html'
})
export class DynamicFormFiltersComponent {
  @Input() filters: FiltersBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.filters.key].valid; }
}
