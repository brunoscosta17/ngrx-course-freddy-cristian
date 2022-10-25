import { Action, createFeatureSelector, createReducer, createSelector, on, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user-model';
import * as fromUserActions from './user.actions';

export interface UsersState {

  users: UserModel[],
  user: UserModel | null,
  error: string | ''

}

export const initialState: UsersState = {
  users: [],
  user: null,
  error: ''
}

const _usersReducer = createReducer(
  initialState,

  on(fromUserActions.loadUsersSuccess, (state, { payload }) => ({ ...state, users: payload, error: '' })),
  on(fromUserActions.loadUsersFail, (state, { error }) => ({ ...state, error: error })),

  on(fromUserActions.loadUserSuccess, (state, { payload }) => ({ ...state, user: payload, error: '' })),
  on(fromUserActions.loadUserFail, (state, { error }) => ({ ...state, error: error })),

  on(fromUserActions.createUserSuccess, (state, { payload }) => ({ ...state, users: [...state.users, payload], error: '' })),
  on(fromUserActions.createUserFail, (state, { error }) => ({ ...state, error: error })),

  on(fromUserActions.updateUserSuccess, (state, { payload }) => ({
    ...state,
    users: [...state.users].map((user) => {
      if (user.id === payload.id) {
        return payload;
      } else {
        return user;
      }
    }),
    error: ''
  })),
  on(fromUserActions.updateUserFail, (state, { error }) => ({ ...state, error: error })),

  on(fromUserActions.deleteUserSuccess, (state, { payload }) => ({
    ...state,
    users: [...state.users].filter((user) => user.id !== payload),
    error: ''
  })),
  on(fromUserActions.deleteUserFail, (state, { error }) => ({ ...state, error: error })),

);

export function usersReducer(state = initialState, action: Action) {
  return _usersReducer(state, action);
}

const getUsersFeatureSate = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getUsersFeatureSate, (state: UsersState) => state.users);

export const getUsersAdministrator = createSelector(getUsersFeatureSate, (state: UsersState) => state.users.filter((user: UserModel) => user.profile === 'Admin'));

export const getUsersByProfile = createSelector(getUsersFeatureSate, (state: UsersState, props: { profile: string }) => state.users.filter((user: UserModel) => user.profile === props.profile));

export const getUsersOlderThan50 = createSelector(getUsersFeatureSate, (state: UsersState) => state.users.filter((user: UserModel) => user.age >= 50));

export const getUser = createSelector(getUsersFeatureSate, (state: UsersState) => state.user);

export const getUserError = createSelector(getUsersFeatureSate, (state: UsersState) => state.error);

