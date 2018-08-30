import * as actions from '../actions/wc.actions';
import { Hotel } from '../../shared/interfaces/Hotel';
export interface State {
    hotels: Hotel[];
    hotel?: Hotel;
}

const initialState: State = {
    hotels : []
};

export function reducer(state = initialState,  action: actions.DesignActions): State {
    switch (action.type) {

      case actions.WCActionTypes.GET_HOTELS_SUCCESS:
        return {
          ...state,
          hotels: action.payload
        };
      case actions.WCActionTypes.SELECT_HOTEL:
        return {
          ...state,
          hotel: state.hotels.find(hotel => hotel.id === action.payload)
        };
      default:
        return state;
    }
}

export const getHotels = (state: State) => state.hotels;
export const getHotel = (state: State) => state.hotel;
