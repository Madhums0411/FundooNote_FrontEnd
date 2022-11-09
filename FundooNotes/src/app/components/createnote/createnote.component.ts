import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  createForm!: FormGroup;
  show = false;
  submitted=false;

  constructor(private formbuilder: FormBuilder , private note:NoteService) { }

  ngOnInit(): void {
    this.createForm = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  isshow() {
    this.show = true;
  }
  close() {
    this.show = false;
    console.log(this.createForm.value.title, this.createForm.value.description);
    let data = {
      title:this.createForm.value.title,
      description:this.createForm.value.description,
    }
     this.note.Notes(data).subscribe((result: any) => {
      console.log(result);
     })
  }
  
  // onSubmit(){
  //   this.submitted=true;
  //   return;
  // }
}
