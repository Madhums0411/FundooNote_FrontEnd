import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArray: any;

  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote()
  }
  getAllNote() {
    this.note.GetNotes().subscribe((response: any) => {
      console.log(response)

      console.log(this.noteArray);  
    })

  }

}
