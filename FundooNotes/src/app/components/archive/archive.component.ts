import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteArray: any
  constructor(private note: NoteService) { }
  ngOnInit(): void {
    // this.archivenotes();
  }
  archivenotes() {
    this.note.GetNotes().subscribe((response: any) => {
      this.noteArray = response.data;
      this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((object: any) => {
        return object.archive == true;
      })
      console.log("Archive notes " + this.noteArray);
    })
  }
}