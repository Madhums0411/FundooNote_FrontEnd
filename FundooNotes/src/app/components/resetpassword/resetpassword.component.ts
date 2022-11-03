import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.resetForm = this.formBuilder.group({
      Newpassword: ['', [Validators.required, Validators.minLength(8)]],
      Cpassword: ['', [Validators.required, Validators.minLength(8)]],

    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.resetForm.valid) {
      return;
    }

  }

  onReset() {
    this.submitted = false;
    this.resetForm.reset();
  }
}
