import Encrypter from "../../../../../src/infra/adapters/encrypt/encrypter.adapter";

describe("Test Encripter", () => {
    it("Should encripter a passoword", () => {
        const encryper = new Encrypter();
        const encripted = encryper.encrypt("@taKemi389");
        expect(encripted).toHaveLength(60);
        expect(encripted !== "@taKemi389").toBeTruthy();
        expect(encryper.compare("@taKemi389", encripted)).toBeTruthy();
    });
});
