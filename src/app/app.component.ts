import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableMultiplication';
  headingName: string = "MULTIPLICATION TABLES";
  loginUser!: FormGroup;
  valueForCal: any;
  items: any;

  constructor(private fb: FormBuilder) {
    this.loginUser = this.fb.group({
      number: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]]
    })
  }

  funcForTable() {
    debugger
    let numbrs = this.valueForCal
    for (let i = 1; i <= 10; i++) {
      let forCal = i * numbrs
      this.items = `${numbrs} * ${i} = ${forCal}`;
      console.log(this.items)
    }
  }
}