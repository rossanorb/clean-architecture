import ValidationException from "../valitadors/ValidationException";
import NameValidator from "../valitadors/name.validator";
import UseValidator from "../valitadors/use.validator";

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
        UseValidator.validate(new NameValidator(user.name));

        this.name = user.name;
        this.email = user.email;
        this.login = user.login;
        this.password = user.password;
        this.active = user.active;
        this.admin = user.admin;

        if (UseValidator.hasError()) {
            throw new ValidationException(UseValidator.getErrors());
        }
    }
}
