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

  colorsArr =[{Colorcode:"pink"},{Colorcode:"yellow"},{Colorcode:"orange"},{Colorcode:"rgb(255,99,71)"},{Colorcode:"rgb(152,251,152)"},{Colorcode:"Teal"},{Colorcode:"rgb(106,90,205)"},{Colorcode:"rgb(240,230,140)"},{Colorcode:"rgb(238,130,238)"},{Colorcode:"rgb(255,160,122)"}];
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
  Trashnote() {

    let data = {

      trash: true,  
    }
    this.note.Trash(this.notecard.notesId).subscribe((response: any) => {
      console.log("Note is trashed",response);



    })
  }
}