import { Component, OnInit } from '@angular/core';
import * as fromWC from './ngrx/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { GetHotelAction } from './ngrx/actions/wc.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<fromWC.WCAppState>) {

  }
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.store.dispatch(new GetHotelAction());
  }

}
