export type userType = {
    name: string;
    email: string;
    login: string;
    password: string;
    active: boolean;
    admin: boolean;
};

export default class User {
    private name;
    private email;
    private login;
    private password;
    private active;
    private admin;

    constructor(user: userType) {
        if (!user.name) {
            throw new Error("Name was not provided");
        }

        this.name = user.name;
        this.name = user.name;
        this.email = user.email;
        this.login = user.login;
        this.password = user.password;
        this.active = user.active;
        this.admin = user.admin;
    }
}
