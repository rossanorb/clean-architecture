import PasswordValidator from "../../../../src/domain/valitadors/password.validator";
import UseValidator from "../../../../src/domain/valitadors/use.validator";

describe("Test use validator password", () => {
    it("Should return that password is required", () => {
        UseValidator.validate(new PasswordValidator("", ""));
        expect(UseValidator.getErrors()).toEqual({
            password: {
                minlength: "Campo password deve possuir 8 caracteres ou mais",
                compLexity: "password não segue os requisitos de complexidade",
                required: "O campo password é obrigatório"
            }
        });
    });

    it("Should return that password and confirm password are not the same", () => {
        UseValidator.validate(
            new PasswordValidator("@Test123456", "@test123456")
        );
        expect(UseValidator.getErrors()).toEqual({
            password: {
                confirm: "Campos passwords não coincidem"
            }
        });
    });

    it("Should return that password is valid", () => {
        UseValidator.validate(
            new PasswordValidator("@Test123457", "@Test123457")
        );
        expect(UseValidator.getErrors()).toEqual({});
    });

    it("Should return that password must meet complexity requirements", () => {
        UseValidator.validate(new PasswordValidator("@lucia123", "@lucia123"));
        expect(UseValidator.getErrors()).toEqual({
            password: {
                compLexity: "password não segue os requisitos de complexidade"
            }
        });
    });

    it("Should return that password must meet complexity requirements together minlength required", () => {
        UseValidator.validate(new PasswordValidator("@lucia", "@lucia"));
        expect(UseValidator.getErrors()).toEqual({
            password: {
                minlength: "Campo password deve possuir 8 caracteres ou mais",
                compLexity: "password não segue os requisitos de complexidade"
            }
        });
    });
});
