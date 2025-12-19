// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private logged = false;

//   login(email: string, password: string): boolean {

//     if (email && password) {
//       this.logged = true;
//       return true;
//     }
//     return false;
//   }

//   logout(): void {
//     this.logged = false;
//   }

//   isLogged(): boolean {
//     return this.logged;
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(email: string, password: string): boolean {
    // simulación de login
    if (email && password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
