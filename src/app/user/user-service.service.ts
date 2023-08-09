import { Injectable } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  isUser$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userEmail: string = ''
  userUid: string = ''

  constructor(
    private database: Database,
    private router: Router,
    private agFireAuth: AngularFireAuth
  ) {}

  register(email: string, password: string) {
    this.agFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.agFireAuth.authState.subscribe((user) => {
          localStorage.setItem('Current-User', JSON.stringify(user));
          this.isUser$$.next(true);
          // this.router.navigate(['/login'])
        });
      })
      .catch((e) => {
        console.log(`Error: ${e.message}`);
      });
  }

  login(email: string, password: string) {
    this.agFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.agFireAuth.authState.subscribe((user) => {
          
          localStorage.setItem('Current-User', JSON.stringify(user));
          this.isUser$$.next(true);
        });
      })
      .catch((e) => {
        console.log(`Error: ${e.message}`);
      });
  }
  getUserData() {
    const currentUser = JSON.parse(localStorage.getItem('Current-User')!);
    return currentUser

  }

  logout() {
    this.agFireAuth.signOut().then(() => {
      localStorage.clear();
      this.isUser$$.next(false);
    });
  }

  isUser() {
    return this.isUser$$.asObservable();
  }
}
