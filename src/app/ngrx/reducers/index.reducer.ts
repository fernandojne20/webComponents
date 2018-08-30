import * as fromWC from './wc.reducer';
import { compose, combineReducers, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import {storeLogger} from 'ngrx-store-logger';
import { environment } from '../../../environments/environment';
export interface WCAppState {
  reducer: {
    store: fromWC.State
  };
}

export const reducers = {
  store: fromWC.reducer
};

const developmentReducer: Function = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
const productionReducer: Function = combineReducers(reducers);

export function metaReducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getWCState = (state: WCAppState) => state.reducer.store;

export const getHotels = createSelector(getWCState, fromWC.getHotels);
export const getHotel = createSelector(getWCState, fromWC.getHotel);
