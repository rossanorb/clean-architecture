import * as bcrypt from "bcrypt";
import EncrypterInterface from "../../../domain/adapters/encrypter.interface";

export class EncrypterAdapter implements EncrypterInterface {
    encrypt(input: string): string {
        return bcrypt.hashSync(input, 7);
    }
    compare(input: string, inputEncrypted: string): boolean {
        return bcrypt.compareSync(input, inputEncrypted);
    }
}
