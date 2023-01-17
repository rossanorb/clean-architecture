import { EmailValidator } from "./../../../../src/domain/valitadors/email.validator";

describe("Test email validator", () => {
    it("Should return email data", () => {
        const emailValidator = new EmailValidator("ann@gmail.com");
        expect(emailValidator.getData()).toEqual({ email: "ann@gmail.com" });
    });

    it("Should return email attribute", () => {
        const emailValidator = new EmailValidator("ann@gmail.com");
        expect(emailValidator.getAttribute()).toEqual({
            email: "E-mail"
        });
    });

    it("Should return email attribute as mail", () => {
        const emailValidator = new EmailValidator("ann@gmail.com", "mail");
        expect(emailValidator.getAttribute()).toEqual({
            email: "mail"
        });
    });

    it("Should return email validators", () => {
        const emailValidator = new EmailValidator("ann@gmail.com");
        expect(emailValidator.getvalidators()).toEqual({
            email: "required|email"
        });
    });
});
