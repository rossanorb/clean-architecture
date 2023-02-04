import { EncrypterAdapter } from "../../../../../src/infra/adapters";

describe("Test Encripter", () => {
    it("Should encripter a passoword", () => {
        const encryper = new EncrypterAdapter();
        const encripted = encryper.encrypt("@taKemi389");
        expect(encripted).toHaveLength(60);
        expect(encripted !== "@taKemi389").toBeTruthy();
        expect(encryper.compare("@taKemi389", encripted)).toBeTruthy();
    });
});
