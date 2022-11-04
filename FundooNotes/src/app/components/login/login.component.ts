import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],

    })
  }
  onSubmit() {

    this.submitted = true;
    if (this.loginForm.valid) {
      console.log("valid data", this.loginForm.value);
      console.log("do api call");
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.user.login(data).subscribe((response: any) => {
        console.log(response);
      })
    }
  }
}

