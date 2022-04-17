import { applyMiddleware, createStore } from 'redux';
import myReducer from './myReducer.js';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const store = createStore(myReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
