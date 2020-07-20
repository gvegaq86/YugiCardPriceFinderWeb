import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CardInfo } from '../interfaces/cardInfo';
import { FiltersBase } from '../filters-base';

@Injectable()
export class FiltersControlService {
  private c: CardInfo;
  constructor(private http: HttpClient
  ) { }
  
  getPrice(set_code: string, condition: string, edition: string, website: string) {
    var path = `https://yugipricefinderapi.uc.r.appspot.com/api/get_price_by_edition?set_code=${set_code}&hideoos=True`


    if(condition != ""){
      path = `${path}&condition=${condition}`
    }
    if(edition != ""){
      path = `${path}&edition=${edition}`
    }
    if(website != ""){
      path = `${path}&website=${website}`
    }

    //return this.http.get<CardInfo>(path);
    return this.http.get<CardInfo>(path);
  }

  toFormGroup(filters: FiltersBase<string>[] ) {
    let group: any = {};

    filters.forEach(filters => {
      group[filters.key] = filters.required ? new FormControl(filters.value || '', Validators.required)
                                              : new FormControl(filters.value || '');
    });
    return new FormGroup(group);
  }
}
