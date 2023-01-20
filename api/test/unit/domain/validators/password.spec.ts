import PasswordValidator from "./../../../../src/domain/valitadors/password.validator";

describe("Test password validaor", () => {
    it("should return password data", () => {
        const passwordValidator = new PasswordValidator(
            "@Clara_Nunes89",
            "@Clara_Nunes89"
        );
        expect(passwordValidator.getData()).toEqual({
            password: "@Clara_Nunes89",
            confirm_password: "@Clara_Nunes89"
        });
    });

    it("Should return password attribute", () => {
        const passwordValidator = new PasswordValidator(
            "@ClaraNunes89",
            "@ClaraNunes89",
            "senha"
        );
        expect(passwordValidator.getAttribute()).toEqual({
            password: "senha"
        });
    });

    it("Should return password validators", () => {
        const passwordValidator = new PasswordValidator(
            "@Clara_Nunes89",
            "@Clara_Nunes89"
        );
        expect(passwordValidator.getvalidators()).toEqual({
            password: "required|minlength:8|password|confirm"
        });
    });
});
