import { Component, OnInit } from '@angular/core';
import { Hotel } from '../shared/interfaces/Hotel';
import * as fromWC from '../ngrx/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { GetHotelAction } from '../ngrx/actions/wc.actions';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {

  hotels$: Observable<Hotel[]>;

  constructor(private store: Store<fromWC.WCAppState>, private router: Router, private route: ActivatedRoute) {
    this.hotels$ = this.store.select(fromWC.getHotels);
  }

  rowSelected(event) {
    this.router.navigate([event.dataItem.id], {relativeTo: this.route});
  }

}
