import { Injectable } from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import { WCActionTypes, GetHotelAction, GetHotelSuccessAction } from '../actions/wc.actions';
import { switchMap, map } from 'rxjs/operators';
import { HotelService } from '../../services/hotel.service';

@Injectable()
export class WCEffects {

    constructor(private actions$: Actions, private hotelSrv: HotelService) {
    }

    @Effect() getHotels$: Observable<Action> = this.actions$
    .ofType(WCActionTypes.GET_HOTELS)
    .pipe(
      switchMap((action: GetHotelAction) => {
        return this.hotelSrv.getHotels()
          .pipe(
            map((res: any) => new GetHotelSuccessAction(res))
          );
      })
    );
}
