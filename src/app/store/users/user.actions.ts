import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user-model';

export const enum usersTypeActions {

  LOAD_USERS = '[LOAD_USERS] LOAD USERS',
  LOAD_USERS_SUCCESS = '[LOAD_USERS_SUCCESS] LOAD USERS SUCCESS',
  LOAD_USERS_FAIL = '[LOAD_USERS_FAIL] LOAD USERS FAIL',

  LOAD_USER = '[LOAD_USER] LOAD USER',
  LOAD_USER_SUCCESS = '[LOAD_USER_SUCCESS] LOAD USER SUCCESS',
  LOAD_USER_FAIL = '[LOAD_USER_FAIL] LOAD USER FAIL',

  CREATE_USER = '[CREATE_USER] CREATE USER',
  CREATE_USER_SUCCESS = '[CREATE_USER_SUCCESS] CREATE USER SUCCESS',
  CREATE_USER_FAIL = '[CREATE_USER_FAIL] CREATE USER FAIL',

  UPDATE_USER = '[UPDATE_USER] UPDATE USER',
  UPDATE_USER_SUCCESS = '[UPDATE_USER_SUCCESS] UPDATE USER SUCCESS',
  UPDATE_USER_FAIL = '[CREATE_USER_FAIL] UPDATE USER FAIL',

  DELETE_USER = '[DELETE_USER] DELETE USER',
  DELETE_USER_SUCCESS = '[DELETE_USER_SUCCESS] DELETE USER SUCCESS',
  DELETE_USER_FAIL = '[DELETE_USER_FAIL] DELETE USER FAIL',

}

export const loadUsers = createAction(usersTypeActions.LOAD_USERS);
export const loadUsersSuccess = createAction(usersTypeActions.LOAD_USERS_SUCCESS, props<{ payload: UserModel[] }>());
export const loadUsersFail = createAction(usersTypeActions.LOAD_USERS_FAIL, props<{ error: string }>());

export const loadUser = createAction(usersTypeActions.LOAD_USER, props<{ payload: number }>());
export const loadUserSuccess = createAction(usersTypeActions.LOAD_USER_SUCCESS, props<{ payload: UserModel }>());
export const loadUserFail = createAction(usersTypeActions.LOAD_USER_FAIL, props<{ error: string }>());

export const createUser = createAction(usersTypeActions.CREATE_USER, props<{ payload: UserModel }>());
export const createUserSuccess = createAction(usersTypeActions.CREATE_USER_SUCCESS, props<{ payload: UserModel }>());
export const createUserFail = createAction(usersTypeActions.CREATE_USER_FAIL, props<{ error: string }>());

export const updateUser = createAction(usersTypeActions.UPDATE_USER, props<{ payload: UserModel }>());
export const updateUserSuccess = createAction(usersTypeActions.UPDATE_USER_SUCCESS, props<{ payload: UserModel }>());
export const updateUserFail = createAction(usersTypeActions.UPDATE_USER_FAIL, props<{ error: string }>());

export const deleteUser = createAction(usersTypeActions.DELETE_USER, props<{ payload: number }>());
export const deleteUserSuccess = createAction(usersTypeActions.DELETE_USER_SUCCESS, props<{ payload: number }>());
export const deleteUserFail = createAction(usersTypeActions.DELETE_USER_FAIL, props<{ error: string }>());
