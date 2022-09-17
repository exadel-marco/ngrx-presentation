import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';
//import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface AuthState {
  user:User
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    // console.log("🚀 ~ file: index.ts ~ line 27 ~ on ~ state, action", state, action);
    // debugger;
    return {
      user:action.user
    }
  })
);

// function authReducer(state, action): AuthState {

// }

//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
