import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss'],
})
export class SteppersComponent implements OnInit {
  firstStepper = {
    firstFormGroup: this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    }),
    secondFormGroup: this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  };

  secondStepper = {
    firstFormGroup: this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    }),
    secondFormGroup: this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  };

  thirdStepper = {
    firstFormGroup: this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    }),
    secondFormGroup: this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    })
  };

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
