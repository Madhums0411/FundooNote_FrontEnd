import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createForm!: FormGroup;
  show = false;
  submitted=false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      title: ['', Validators.required],
      note: ['', Validators.required],
    })
  }
  isshow() {
    this.show = true;
  }
  close() {
    this.show = false;
  }
  onSubmit(){
    this.submitted=true;
    return;
  }
}
