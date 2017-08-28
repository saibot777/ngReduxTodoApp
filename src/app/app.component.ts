import { INCREMENT } from './actions';
import { IAppState } from './store';
import { NgRedux } from 'ng2-redux';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter = 0;

  constructor(public ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      let store = ngRedux.getState();
      this.counter = store.counter;
    });
  }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
