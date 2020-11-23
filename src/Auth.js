
class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(callback) {
        this.authenticated = true;
        console.log(this.authenticated);
        callback();
    }

    logout(callback) {
        this.authenticated = false;
        callback();
    }

    isAuthenticated() {
        console.log(this.authenticated);
        return this.authenticated;
    }
}

export default new Auth();

//checking if user is authentcated 
