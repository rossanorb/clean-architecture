import ValidationException from "../valitadors/validationException";
import NameValidator from "../valitadors/name.validator";
import UseValidator from "../valitadors/use.validator";
import EmailValidator from "../valitadors/email.validator";
import UsernameValidator from "../valitadors/username.validator";
import PasswordValidator from "../valitadors/password.validator";
import UUID from "../adapters/uuid";
import Encryper from "../adapters/encrypter";
import Adapters from "../adapters/adapters";

export type userType = {
    id?: string | number;
    name: string;
    email: string;
    login: string;
    password: string;
    confirm_password: string;
    active: boolean;
    admin: boolean;
};

export default class User {
    private id;
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
            new PasswordValidator(user.password, user.confirm_password)
        );

        if (UseValidator.hasError()) {
            throw new ValidationException(UseValidator.getErrors());
        }

        const uuid = new UUID(Adapters.generatorIdAdapter(), user.id);
        const encrypter = new Encryper(Adapters.encrypterAdapter());

        this.id = uuid.getId();
        this.name = user.name;
        this.email = user.email;
        this.login = user.login;
        this.password = encrypter.encrypt(user.password);
        this.active = user.active;
        this.admin = user.admin;
    }
}
