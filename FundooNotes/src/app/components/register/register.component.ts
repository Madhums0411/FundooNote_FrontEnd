import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(4)]],
      Confirm: ['', Validators.required]
    })
  }
  onSubmit() {

    this.submitted = true;
    if (this.registerForm.valid) {
      console.log("valid data", this.registerForm.value);
      console.log("do api call");
      let data = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }
      this.user.register(data).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}