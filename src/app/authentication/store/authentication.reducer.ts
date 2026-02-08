import { Action, createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';


export const AUTHENTICATION_FEATURE_KEY = 'authentication';

export interface AuthenticationState {
 
}

export const initialState: AuthenticationState = {

};

export const reducer = createReducer(
  initialState,
 
);

export function AuthenticationReducer(state: AuthenticationState | undefined, action: Action) {
  return reducer(state, action);
}
