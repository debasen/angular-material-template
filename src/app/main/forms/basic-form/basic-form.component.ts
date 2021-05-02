import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  //.ts for credit card form starts//
  creditCardForm = {
    months : [...Array(12).keys()],
    years : (function(){
      let arr = [];
      for(let i=1;i<12;i++){
        arr.push(i);
      }
      return arr;
    })()
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
  fieldAppearance = 'standard';
  passwordHide = true;
  cnfPasswordHide = true;
  languages = ['English','Hindi'];

  constructor() { }

  ngOnInit(): void { 
  }

  validateConfirmPassword(userRegistrationForm:NgForm){
    if(!userRegistrationForm.controls['confirmPassword'].value || userRegistrationForm.controls['confirmPassword'].value==""){
        delete userRegistrationForm.controls['confirmPassword'].errors?.passwordMismatch;
    }
    else if(userRegistrationForm.controls['confirmPassword'].value !== userRegistrationForm.controls['password'].value){
      userRegistrationForm.controls['confirmPassword'].setErrors({'passwordMismatch': true});
    }else{
      userRegistrationForm.controls['confirmPassword'].setErrors(null);
    }
  }

  addLanguage(event : MatChipInputEvent){
    const input = event.input;
    const value = event.value;
    // Add our language
    if ((value || '').trim()) {
      this.languages.push(value.trim());
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }
  submit(form: NgForm){
    console.log(form);
  }
  


}
