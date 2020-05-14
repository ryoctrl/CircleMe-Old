import { Reducer } from 'redux';
import { CirclesState, CirclesActionTypes } from './types';

export const initialState: CirclesState  = {
    isFetching: false,
    circles: [],
}

const reducer: Reducer<CirclesState> = (state = initialState, action) => {
    switch (action.type) {
        case CirclesActionTypes:
            return {...state, isFetching: true}
        default:
            return state
    }
};

export { reducer as circlesReducer };
