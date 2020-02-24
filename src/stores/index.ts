import { combineReducers } from 'redux';
import basket from './basket';

const rootReducer = combineReducers({
  basket
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;