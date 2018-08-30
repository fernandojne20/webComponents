import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../shared/interfaces/Hotel';
import * as fromWC from '../ngrx/reducers/index.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SelectHotelAction } from '../ngrx/actions/wc.actions';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelDetailComponent implements OnInit {


  hotel$: Observable<Hotel>;
  constructor(private store: Store<fromWC.WCAppState>, private route: ActivatedRoute) {

    this.hotel$ = this.store.select(fromWC.getHotel);
  }

  ngOnInit() {
    this.route.params.subscribe(param => this.store.dispatch(new SelectHotelAction(param.id)));
  }

}
