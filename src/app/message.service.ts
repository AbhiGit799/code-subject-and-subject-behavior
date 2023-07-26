import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //We need to share data to multiple component, i.e we are using MessageService

  name = new BehaviorSubject("Ram Kumar");

  constructor() { }

  
}
