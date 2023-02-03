import EncrypterInterface from "./encrypter.interface";

export default class Encryper {
    constructor(private readonly encrypter: EncrypterInterface) {}

    encrypt(input: string): string {
        return this.encrypter.encrypt(input);
    }

    compare(input: string, inputEncrypted: string): boolean {
        return this.encrypter.compare(input, inputEncrypted);
    }
}
