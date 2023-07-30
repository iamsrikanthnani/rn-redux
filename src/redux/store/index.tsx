import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {todoReducer} from '@redux/reducers';

// list of reducers
const rootReducer = combineReducers({
  todoReducer,
});

//store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
