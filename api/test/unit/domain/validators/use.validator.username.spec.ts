import { UseValidator } from "../../../../src/domain/valitadors/use.validator";
import { UsernameValidator } from "../../../../src/domain/valitadors/username.validator";

describe("Test use Validator Username", () => {
    it("Should return that username is required and it must have minimum 5 characters", () => {
        UseValidator.validate(new UsernameValidator(""));

        expect(UseValidator.getErrors()).toEqual({
            username: {
                minlength: "Campo Username deve possuir 5 caracteres ou mais",
                required: "O campo Username é obrigatório"
            }
        });
    });
    it("Should return that maxlength is invalid", () => {
        expect(
            UseValidator.validate(new UsernameValidator("ZenkichiHasegawa"))
        ).toBeFalsy();

        expect(UseValidator.getErrors()).toEqual({
            username: {
                maxlength:
                    "Campo Username deve possuir o limite máximo de 15 caracteres"
            }
        });
    });

    it("Should return that maxlength is valid", () => {
        expect(
            UseValidator.validate(new UsernameValidator("TaeTakemi"))
        ).toBeTruthy();

        expect(UseValidator.getErrors()).toEqual({});
    });

    it("Should not allow special characters for username", () => {
        expect(
            UseValidator.validate(new UsernameValidator("an$n@1990%"))
        ).toBeFalsy();

        expect(UseValidator.getErrors()).toEqual({
            username: {
                "not-allowedchars":
                    "Username possui caracteres não permitidos: $, @, %"
            }
        });
    });

    it("Should not allow special characters for Login", () => {
        expect(
            UseValidator.validate(new UsernameValidator("an$n@1990%", "Login"))
        ).toBeFalsy();

        expect(UseValidator.getErrors()).toEqual({
            username: {
                "not-allowedchars":
                    "Login possui caracteres não permitidos: $, @, %"
            }
        });
    });
});
