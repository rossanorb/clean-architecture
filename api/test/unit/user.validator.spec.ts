import { UserValidator } from "../../src/domain/validators/user.validator";

describe("Test user validator", () => {
    it("Should return that name is required", () => {
        const validator = new UserValidator({
            name: "",
            email: "rossanorb@gmail.com"
        });
        validator.fail();

        expect(validator).toBeInstanceOf(UserValidator);
        expect(validator.getErrors()).toEqual({
            name: {
                required: "O campo Nome é obrigatório"
            }
        });
    });

    it("Should return that email is required and email is invalid", () => {
        const validator = new UserValidator({ name: "Rossano", email: "" });
        validator.fail();

        expect(validator).toBeInstanceOf(UserValidator);
        expect(validator.getErrors()).toEqual({
            email: {
                required: "O campo E-mail é obrigatório",
                email: "O E-mail é inválido"
            }
        });
    });

    it("Should return that just only the email is invalid", () => {
        const validator = new UserValidator({
            name: "Rossano",
            email: "rossanorb@gmail"
        });
        validator.fail();

        expect(validator).toBeInstanceOf(UserValidator);
        expect(validator.getErrors()).toEqual({
            email: {
                email: "O E-mail é inválido"
            }
        });
    });

    it("Should not return any error message", () => {
        const validator = new UserValidator({
            name: "Rossano",
            email: "rossanorb@gmail.com"
        });
        validator.fail();

        expect(validator).toBeInstanceOf(UserValidator);
        expect(validator.getErrors()).toEqual({});
    });
});
