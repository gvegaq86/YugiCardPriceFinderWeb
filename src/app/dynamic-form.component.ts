import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { FiltersBase }              from './filters-base';
import { FiltersControlService }    from './services/filters-control.service';
import { Results }              from './interfaces/cardInfo';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ FiltersControlService ]
})
export class DynamicFormComponent implements OnInit {
  show = false;

  @Input() filters: FiltersBase<string>[] = [];
  form: FormGroup;

  @Input() items1: Results;
  constructor(private qcs: FiltersControlService) {  }
  
  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.filters);
  }

  onSubmit() {
    const set_code = this.form.value.code;
    const condition = this.form.value.condition;
    const edition = this.form.value.edition;
    const website = this.form.value.website;

    this.qcs.getPrice(set_code, condition, edition, website)
    .subscribe(task => {
      this.items1 = task.results;
      if(task.results.card_list.length > 0){
        this.show = true;
      }
      else{
        this.show = false;
      }
    });
  }
}
