import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token')
  }
  Notes(data: any) {
    console.log(data, this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token

      })
    }
    return this.http.postService('https://localhost:44315/api/Notes/Create', data, true, header)
  }
  GetNotes() {
    console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.getService('https://localhost:44315/api/Notes/GetAll', true, header)

  }
  updateNote(data: any, notesId: any) {
    // console.log(this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.putService('https://localhost:44315/api/Notes/Update?NotesId=' + notesId, data, true, header);
  }
  Archive(data: any,) {
    console.log(data,this.token);
  
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
   return this.http.putService("https://localhost:44315/api/Notes/Archive?notesId="+data,{}, true,header)
  }

}
