import { PasswordValidator } from "../../../../src/domain/valitadors/password.validator";
import { UseValidator } from "../../../../src/domain/valitadors/use.validator";

describe("Test use validator password", () => {
    it("Should return that password is required", () => {
        UseValidator.validate(new PasswordValidator("")); //@Test123456
        expect(UseValidator.getErrors()).toEqual({
            password: {
                minlength: "Campo password deve possuir 8 caracteres ou mais",
                required: "O campo password é obrigatório"
            }
        });
    });
});
