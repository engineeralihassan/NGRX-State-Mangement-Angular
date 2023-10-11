import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
@Component({
  selector: 'app-counterdispaly',
  templateUrl: './counterdispaly.component.html',
  styleUrls: ['./counterdispaly.component.css']
})
export class CounterdispalyComponent {
  counterDisplay:any;
  constructor (private store: Store<{counter:{counter:number}}>){}
  ngOnInit(){
    this.store.select('counter').subscribe(data=>{
      this.counterDisplay=data.counter;
    })
  }

}
