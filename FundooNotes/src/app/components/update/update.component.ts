import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  description: any
  id: any

  constructor(public note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.description = data.description;
    this.id = data.notesId;
  }


  ngOnInit(): void {


  }
  onNoClick(): void {
    console.log(this.title, this.description);
    let data = {
      title:this.title,
      description: this.description,
      notesId:this.id,
    }
    this.note.updateNote(data, this.id).subscribe((response:any) =>{ 
      console.log("update response", response); 
            
    })
    this.dialogRef.close()
  }
}
