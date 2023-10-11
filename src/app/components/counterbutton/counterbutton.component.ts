import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
import { decrement, increment, reset } from 'src/app/shared/stor/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(private store:Store<{counter:{counter:number}}>){}
 
  Onincrement(){
  this.store.dispatch(increment());
  }
  Ondecrement(){
    this.store.dispatch(decrement());
  }
  Onreset(){
    this.store.dispatch(reset());
  }
}
