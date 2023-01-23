import ValidationException from "../valitadors/validationException";
import NameValidator from "../valitadors/name.validator";
import UseValidator from "../valitadors/use.validator";
import EmailValidator from "../valitadors/email.validator";
import UsernameValidator from "../valitadors/username.validator";
import PasswordValidator from "../valitadors/password.validator";

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
        UseValidator.validate(new EmailValidator(user.email));
        UseValidator.validate(new UsernameValidator(user.login));
        UseValidator.validate(
            new PasswordValidator(user.password, user.password)
        );

        if (UseValidator.hasError()) {
            throw new ValidationException(UseValidator.getErrors());
        }

        this.name = user.name;
        this.email = user.email;
        this.login = user.login;
        this.password = user.password;
        this.active = user.active;
        this.admin = user.admin;
    }
}
