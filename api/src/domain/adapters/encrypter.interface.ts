export default interface EncrypterInterface {
    encrypt(input: string): string;
    compare(input: string, inputEncrypted: string): boolean;
}
