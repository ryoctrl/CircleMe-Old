import { combineReducers } from 'redux';

import { }
import { CirclesState } from './circles/types';

export interface ApplicationState {
    circles: CirclesState
}

export const createRootReducer = () => {
    combineReducers({


    });
}