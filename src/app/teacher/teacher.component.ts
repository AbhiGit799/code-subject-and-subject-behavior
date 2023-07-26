import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  
 // studentName:string="";

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
