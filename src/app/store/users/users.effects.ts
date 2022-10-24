import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UsersService } from 'src/app/repositories/user-service';
import * as fromUsersActions from '../users/user.actions';

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UsersService) {}

    loadUsers$ = createEffect(
      () => this.actions$.pipe(ofType(fromUsersActions.usersTypeActions.LOAD_USERS),
      exhaustMap(() => this.userService.getUsers()
        .pipe(
          map(payload => fromUsersActions.loadUsersSuccess({ payload }),
          catchError(error => of(fromUsersActions.loadUsersFail({ error }))))
          )
        )
      )
    );

    loadUser$ = createEffect(
      () => this.actions$.pipe(ofType(fromUsersActions.usersTypeActions.LOAD_USER),
      exhaustMap((record: any) => this.userService.getUser(record.payload)
        .pipe(
          map(payload => fromUsersActions.loadUserSuccess({ payload }),
            catchError(error => of(fromUsersActions.loadUserFail({ error }))))
          )
        )
      )
    );

    createUser$ = createEffect(
      () => this.actions$.pipe(ofType(fromUsersActions.usersTypeActions.CREATE_USER),
      exhaustMap((record: any) => this.userService.addUser(record.payload)
        .pipe(
          map(payload => fromUsersActions.createUserSuccess({ payload }),
            catchError(error => of(fromUsersActions.createUserFail({ error }))))
          )
        )
      )
    );

    updateUser$ = createEffect(
      () => this.actions$.pipe(ofType(fromUsersActions.usersTypeActions.UPDATE_USER),
      exhaustMap((record: any) => this.userService.updateUser(record.payload)
        .pipe(
          map(payload => fromUsersActions.updateUserSuccess({ payload }),
            catchError(error => of(fromUsersActions.updateUserFail({ error }))))
          )
        )
      )
    );

    deleteUser$ = createEffect(
      () => this.actions$.pipe(ofType(fromUsersActions.usersTypeActions.DELETE_USER),
      exhaustMap((record: any) => this.userService.deleteUser(record.payload)
        .pipe(
          map(() => fromUsersActions.deleteUserSuccess({ payload: record.payload }),
            catchError(error => of(fromUsersActions.deleteUserFail({ error }))))
          )
        )
      )
    );

}
