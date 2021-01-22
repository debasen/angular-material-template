import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  //.ts for credit card form starts//
  creditCardForm = {
    methods : {
      fetchMonth: function () {
        var result = [];
        for (let i = 1; i <= 12; i++) {
          result.push(i);
        }
        return result;
      }, fetchYear: function () {
        var result = [];
        for (let i = 2010; i <= 2050; i++) {
          result.push(i);
        };
        return result;
      }
    }
  };
  //.ts for credit card form ends//
  //.ts for inline form starts//
  inlineForm={
    variables:{
      hide:true 
    }
  };
  //.ts for inline form ends//
  //.ts for validate states form starts//
  validationStatesForm = {
    emailFormControl : new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  };
  
  //.ts for validate states form ends//

  constructor() { }

  ngOnInit(): void { 
  }
  


}
