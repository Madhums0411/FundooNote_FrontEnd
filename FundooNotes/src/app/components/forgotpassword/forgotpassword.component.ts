import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userservice/user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService ) { }

  ngOnInit(){
    this.forgotForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],

    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.valid) {
      console.log("valid data",this.forgotForm.value);
      console.log("do api call");
      let data={
        Email:this.forgotForm.value.Email
      }
      this.user.forgot(data).subscribe((response:any)=>{
        console.log(response);
      })
    }
    else{
      console.log("No api call")
    }

  }
}
