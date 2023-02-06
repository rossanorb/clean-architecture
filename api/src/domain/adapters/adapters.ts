import { EncrypterAdapter, GeneratorIdAdapter } from "../../infra/adapters";
import EncrypterInterface from "./encrypter.interface";
import UUIDInterface from "./uuid.interface";

export default class Adapters {
    static generatorIdInstance(): UUIDInterface {
        return new GeneratorIdAdapter();
    }

    static encrypterAdapter(): EncrypterInterface {
        return new EncrypterAdapter();
    }
}
