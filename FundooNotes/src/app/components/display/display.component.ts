import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  displayform!: FormGroup;
  submitted=false;
  constructor(private formbuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    return;
  }
}
