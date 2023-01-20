import NameValidator from "./../../../../src/domain/valitadors/name.validator";

describe("Test name validator", () => {
    it("Should return name data", () => {
        const nameValidator = new NameValidator("Ann");
        expect(nameValidator.getData()).toEqual({ name: "Ann" });
    });

    it("Should return name attribute", () => {
        const nameValidator = new NameValidator("Ann");
        expect(nameValidator.getAttribute()).toEqual({
            name: "Nome"
        });
    });

    it("Should return sobrenome attribute as name", () => {
        const nameValidator = new NameValidator("ann@gmail.com", "sobrenome");
        expect(nameValidator.getAttribute()).toEqual({
            name: "sobrenome"
        });
    });

    it("Should return name validators", () => {
        const nameValidator = new NameValidator("ann@gmail.com");
        expect(nameValidator.getvalidators()).toEqual({
            name: "required|minlength:2"
        });
    });
});
