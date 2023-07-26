import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable,ReplaySubject,Subject,filter,map, mergeMap } from 'rxjs';

import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: true,
  viewProviders: [], //viewProviders is for using class.
  encapsulation: ViewEncapsulation.None,

  providers: [], //Making service component level ; //21-March-2023
})


export class AppComponent {

  title="Angular Tutorial";
 
 // studentName:string=""; for subject behavior

  studentName:any=""; //for subject

  constructor(private _messageService:MessageService)
  {

  }



  ngOnInit()
  {
   

    this._messageService.name.subscribe(res=>{
      this.studentName = res;
    })

    this.exampleSubject();
    
    console.log("\n");

    this.exampleBehaviorSubject();

    console.log("\n");

    this.exampleReplaySubject();
    
    
  }

  exampleSubject()
  {
    //Subject
    //Ex: youTube channel

    const mySubject = new Subject();

    mySubject.next(1); //Here 1 is value

   const Sub1Obj = mySubject.subscribe(res=>{
      
      //console.log("Subscription1:  "+res);

      //for displaying array
      console.log("Subscription1");
      console.log(res);
      
      
    });

    mySubject.next(2); //Here 2 is value
    mySubject.next("Kamal");
    mySubject.next([1,2,3,4]);


    const Sub2Obj = mySubject.subscribe(r=>{
      console.log("Subscription2 = "+r);
      
    })

    mySubject.next(75);

    Sub1Obj.unsubscribe();

  }



  exampleBehaviorSubject()
  {
   // const myBehSubject = new BehaviorSubject(''); //giving values is compulsory 
   
   const myBehSubject = new BehaviorSubject(0); //default value.

   const myBehSub1 = myBehSubject.subscribe(res=>{
    console.log("myBehSub1 = " + res);
    
   })

   myBehSubject.next(1);

   myBehSubject.next(55);

   // myBehSubject.next("AA"); //give error because default value we give is 0 which number type

  const myBehSub2 = myBehSubject.subscribe(r=>{
    console.log("myBehSub2 = "+r);
    
  })

  const myBehSub3 = myBehSubject.subscribe(r=>{
    console.log("myBehSub3 = "+r);
    
  })


  }


  exampleReplaySubject()
  {

    //We can enter default value of number type only.
    //Give back value of all, if we don;t give any parameter in below code
    const myReplaySubject = new ReplaySubject();

    myReplaySubject.next(1);
    myReplaySubject.next(2);
    myReplaySubject.next(3);
    myReplaySubject.next(4);
    myReplaySubject.next(5);

    const subReplay = myReplaySubject.subscribe(res=>{
      console.log("SubReplay1 " +res);
    })

    console.log("\n");
    
  
    const myReplaySubject2 = new ReplaySubject(2);

    myReplaySubject2.next(1);
    myReplaySubject2.next(2);
    myReplaySubject2.next(3);
    myReplaySubject2.next(4);
    myReplaySubject2.next(5);

    myReplaySubject2.subscribe(res=>{
      console.log("subReplayBack2 " +res);
    })

    console.log("\n");
    

    const myReplaySubject3 = new ReplaySubject(3);


    myReplaySubject3.next(1);
    myReplaySubject3.next(2);
    myReplaySubject3.next(3);
    myReplaySubject3.next(4);
    myReplaySubject3.next(5);

    const myRep3 = myReplaySubject3.subscribe(res=>{
      console.log("subReplayBack3 " +res);
    })

     myReplaySubject3.next(6);

     console.log("\n");
    

     const myRep4 = myReplaySubject3.subscribe(res=>{
      console.log("subReplayBack4 " +res);
    })


     myReplaySubject3.next("Ram");  //No restriction here, like we have in Behavior subject.

     console.log("\n");
     

     myReplaySubject3.subscribe(res=>{
      console.log("subReplayBack4 " +res);
    })


    myRep4.unsubscribe();

    myReplaySubject3.next(100);


  }

  

  }

  





























