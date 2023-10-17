import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customeincrement } from '../shared/stor/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  inputValue:any;
  actionType:any;
  constructor(private store:Store<{counter:{counter:number} }>){}

  onincrement(){
   
  }
  endloading(){}
}
