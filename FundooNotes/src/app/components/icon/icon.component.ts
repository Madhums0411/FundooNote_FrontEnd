import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notecard: any;
  notesId: any;
  isArchive = false;


  constructor(private note: NoteService) { }

  ngOnInit(): void {

  }

  onArchive() {
    let data = {
      notesId: [this.notecard.notesId]

    }
    console.log(data);
    this.note.Archive(this.notecard.notesId).subscribe((Response: any) => {
      console.log("Note Archived Successfull", Response);

    })
  }

}