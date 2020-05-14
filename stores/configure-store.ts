import { createStore, Middleware, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ApplicationState } from './modules';

export default function configureStore(initialState: ApplicationState, { isServer = null, req = null }) {
    const sagaMiddleware: Middleware<{}, any, any> = createSagaMiddleware();
    const store = createStore(initialState, applyMiddleware(sagaMiddleware));

}


