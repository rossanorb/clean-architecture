import { UsernameValidator } from "../../../src/domain/valitadors/username.validator";

describe("Test username validator", () => {
    it("Should return an error, username is not optional", () => {
        expect(() => new UsernameValidator("")).toThrowError(
            "Username need to be provide"
        );
    });

    it("Should return username data whole lowercase", () => {
        const usernameValidator = new UsernameValidator("Ann");
        expect(usernameValidator.getData()).toEqual({ username: "ann" });
    });

    it("Should return username attribute as login", () => {
        const usernameValidator = new UsernameValidator("Ann", "Login");
        expect(usernameValidator.getAttribute()).toEqual({
            username: "Login"
        });
    });

    it("Should return email validators", () => {
        const usernameValidator = new UsernameValidator("ANN");
        expect(usernameValidator.getvalidators()).toEqual({
            username: "required|minlength:5|maxlength:15"
        });
    });
});
