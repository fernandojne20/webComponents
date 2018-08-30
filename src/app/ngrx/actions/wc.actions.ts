import { Action } from '@ngrx/store';
import { Hotel } from '../../shared/interfaces/Hotel';

export const WCActionTypes = {
    GET_HOTELS : '[HOTELS] Get Hotels List',
    GET_HOTELS_SUCCESS : '[HOTELS] Get Hotels List Success',
    SELECT_HOTEL: '[HOTELS] Select Hotel'
};

export class GetHotelAction implements Action {
    readonly type: string = WCActionTypes.GET_HOTELS;

    constructor(public payload?: any) {
    }
}

export class GetHotelSuccessAction implements Action {
    readonly type: string = WCActionTypes.GET_HOTELS_SUCCESS;

    constructor(public payload: Hotel[]) {
    }
}

export class SelectHotelAction implements Action {
    readonly type: string = WCActionTypes.SELECT_HOTEL;

    constructor(public payload: string) {
    }
}

export type DesignActions = GetHotelAction
| GetHotelSuccessAction
| SelectHotelAction;
