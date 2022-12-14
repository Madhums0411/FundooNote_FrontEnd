import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.GetNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteArray = response.data;
      //  this.noteArray=this.noteArray.reverse(); 
      console.log(this.noteArray);
    })

  }
}

