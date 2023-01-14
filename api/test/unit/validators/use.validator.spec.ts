import { UseValidator } from "../../../src/domain/valitadors/use.validator";
import { EmailValidator } from "../../../src/domain/valitadors/email.validator";
import { NameValidator } from "../../../src/domain/valitadors/name.validator";

describe("Test use Validator", () => {
    it("should return email is valid", () => {
        expect(
            UseValidator.validate(new EmailValidator("ann@gmail.com"))
        ).toBeTruthy();
        expect(UseValidator.getErrors()).toEqual({});
    });

    it("should return that name was not provided and it need to have minimum two characters", () => {
        expect(
            UseValidator.validate(new EmailValidator("ann@gmail"))
        ).toBeFalsy();
        expect(UseValidator.getErrors()).toEqual({
            email: {
                email: "O E-mail é inválido"
            }
        });
    });

    it("should return name is valid", () => {
        expect(UseValidator.validate(new NameValidator("Ann"))).toBeTruthy();
        expect(UseValidator.getErrors()).toEqual({});
    });

    it("should return that name was not provided and it need to have minimum two characters", () => {
        expect(UseValidator.validate(new NameValidator(""))).toBeFalsy();
        expect(UseValidator.getErrors()).toEqual({
            name: {
                required: "O campo Nome é obrigatório",
                minlength: "Campo Nome deve possuir 2 caracteres ou mais"
            }
        });
    });

    it("Should return that email is invalid, name is required and it has insufficient number of characters", () => {
        expect(
            UseValidator.validate(new EmailValidator("ann@gmail"))
        ).toBeFalsy();

        expect(UseValidator.validate(new NameValidator(""))).toBeFalsy();

        expect(UseValidator.getErrors()).toEqual({
            email: {
                email: "O E-mail é inválido"
            },
            name: {
                minlength: "Campo Nome deve possuir 2 caracteres ou mais",
                required: "O campo Nome é obrigatório"
            }
        });
    });

    it("Should return empty error after it has been called by the method getErrors() ", () => {
        UseValidator.validate(new EmailValidator("ann@gmail"));
        UseValidator.validate(new NameValidator(""));
        UseValidator.getErrors();

        expect(UseValidator.getErrors()).toEqual({});
    });

    it("Should not return empty error after it has been called by the method getErrors(true) ", () => {
        UseValidator.validate(new EmailValidator("ann@gmail"));
        UseValidator.validate(new NameValidator("A"));

        const data = {
            email: {
                email: "O E-mail é inválido"
            },
            name: {
                minlength: "Campo Nome deve possuir 2 caracteres ou mais"
            }
        };

        expect(UseValidator.getErrors(true)).toEqual(data);
        expect(UseValidator.getErrors()).toEqual(data);
    });

    it("Should return that not exist error", () => {
        UseValidator.validate(new NameValidator("A"));
        UseValidator.validate(new EmailValidator("ann@gmail"));

        expect(UseValidator.hasError()).toBeTruthy();
        UseValidator.getErrors();
    });

    it("Should return that not exist error", () => {
        UseValidator.validate(new NameValidator("Ann"));
        UseValidator.validate(new EmailValidator("ann@gmai.com"));

        expect(UseValidator.hasError()).toBeFalsy();
        UseValidator.getErrors();
    });
});
