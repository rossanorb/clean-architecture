import * as bcrypt from "bcrypt";
import EncrypterInterface from "../../../../../src/domain/adapters/encrypter.interface";

export class EncrypterAdapteSpy implements EncrypterInterface {
    encrypt(input: string): string {
        return bcrypt.hashSync(input, 7);
    }
    compare(input: string, inputEncrypted: string): boolean {
        return bcrypt.compareSync(input, inputEncrypted);
    }
}

describe("Test Encripter", () => {
    it("Should encripter a passoword", () => {
        const encryper = new EncrypterAdapteSpy();
        const encripted = encryper.encrypt("@taKemi389");
        expect(encryper.compare("@taKemi389", encripted)).toBeTruthy();
    });
});
