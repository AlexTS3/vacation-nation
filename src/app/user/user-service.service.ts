import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(
    private database: Database,
    private router: Router,
    private agFireAuth: AngularFireAuth
  ) {}

  register(email: string, password: string) {
    return this.agFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.agFireAuth.authState.subscribe((user) => {
          localStorage.setItem('Current-User', JSON.stringify(user));
        });
        // this.loggedIn$$.next(true);
      })
      .catch((e) => {
        console.log(`Error: ${e.message}`);
      });
  }

  login(email: string, password: string) {
    return this.agFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.agFireAuth.authState.subscribe((user) => {
          localStorage.setItem('Current-User', JSON.stringify(user));
        });
      })
      .catch((e) => {
        console.log(`Error: ${e.message}`);
      });
  }
  getUserData(userName: string) {
    const starCountRef = ref(this.database, 'users/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      return data[userName];
    });
  }

  logout() {
    localStorage.clear();
  }
}
