import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  //studentName:string="";

  studentName:any=""; //for subject

  constructor(private _messageService:MessageService)
  {

  }

  ngOnInit()
  {
    this._messageService.name.subscribe(
      res=>{
        this.studentName=res
      }
    )
  }

  Update(val:string)
  {
    this._messageService.name.next(val);

  }
}
