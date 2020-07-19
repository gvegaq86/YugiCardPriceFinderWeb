import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FiltersBase }              from './filters-base';
import { FiltersControlService }    from './services/filters-control.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ FiltersControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() filters: FiltersBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: FiltersControlService) {  }
  
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.filters);
  }

  onSubmit() {
    const set_code = this.form.value.code;
    const condition = this.form.value.Condicion;
    const edition = this.form.value.Edition;
    const website = this.form.value.Website;

    this.qcs.getPrice(set_code, condition, edition, website)
    .subscribe(task => {
      this.payLoad = JSON.stringify(task);
    });
  }
}
