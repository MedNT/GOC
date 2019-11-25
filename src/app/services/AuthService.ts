export class AuthService {

  isAuth = false;

  signIn(user: string, pass: string) {
    if (user === 'naciri' && pass === '123') {
      this.isAuth = true;
      return true;
    }
  }

  signOut() {
    this.isAuth = false;
  }

}
