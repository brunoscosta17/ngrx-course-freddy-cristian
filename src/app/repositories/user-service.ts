import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {}
    
    getUsers() {
        return this.http.get('http://localhost:3000/users');
    }

    getUser(id: number) {
        return this.http.get('http://localhost:3000/users/' + id);
    }

    addUser(user: UserModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('http://localhost:3000/users', JSON.stringify(user), { headers });
    }

    updateUser(user: UserModel) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.put('http://localhost:3000/users/' + user.id, JSON.stringify(user), { headers });
    }

    deleteUser(id: number) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.put('http://localhost:3000/users/' + id, { headers });
    }

}