import { Validator } from "./validator";

export class UserValidator {
    private readonly validator;

    constructor(data: object, method?: string) {
        let validators: object = {};

        switch (method) {
        case "no_pass":
            validators = {
                name: "required",
                email: "required|email"
            };
            break;
        default:
            validators = {
                name: "required",
                email: "required|email",
                password: "required|minlength:6"
            };
        }

        const attributes = {
            email: "E-mail",
            name: "Nome",
            password: "Senha"
        };

        this.validator = new Validator({
            data,
            validators,
            attributes
        });
    }

    fail(): void {
        this.validator.fail();
    }

    getErrors(): object {
        return this.validator.getErrors();
    }
}
