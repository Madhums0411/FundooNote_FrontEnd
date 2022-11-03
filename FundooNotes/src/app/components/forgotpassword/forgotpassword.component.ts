import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.valid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.forgotForm.reset();
  }

}
