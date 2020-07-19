import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormFiltersComponent } from './dynamic-form-filters.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, HttpClientModule],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormFiltersComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
