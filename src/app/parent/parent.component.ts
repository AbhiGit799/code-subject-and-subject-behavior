import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  // studentName:string=""; //for subject behavior

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
