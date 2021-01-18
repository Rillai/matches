import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import { MatchesReducer } from './reducers/matches-reducer';

const reducers = combineReducers({
    matchesPage: MatchesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export default store;