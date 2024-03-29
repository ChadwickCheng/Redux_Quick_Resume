import { Dispatch, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type AppDispatch = Dispatch<Action> & ThunkDispatch;
export type ThunkDispatch = (thunkAction: ThunkAction<void, object, unknown, Action>) => Promise<void>;