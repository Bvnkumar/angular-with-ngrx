import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import {increment,decrement} from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-with-ngrx';
  counter$:Observable<any>;
  constructor(private store:Store<{counter:number}>){
    this.counter$=this.store.pipe(select('counter'))
  }
  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }
}
