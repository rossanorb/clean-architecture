import { randomUUID } from "crypto";
import UUIDInterface from "./uuid.interface";

export default class GeneratorIdAdapter implements UUIDInterface {
    generate(id?: string | number | undefined): string | number {
        return id || randomUUID();
    }
}
