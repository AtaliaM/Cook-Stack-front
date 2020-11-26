import myLocalStorage from './localStorage';

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        console.log(this.authenticated);
        myLocalStorage.save("auth", "true");
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        myLocalStorage.remove("auth", "true");
        callback();
    }

    isAuthenticated() {
        console.log(this.authenticated);
        return this.authenticated;
    }
}

export default new Auth();

//checking if user is authentcated 
