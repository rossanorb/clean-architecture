import { randomUUID } from "crypto";
import UUIDInterface from "../../../domain/uuid.interface";

export class GeneratorIdAdapter implements UUIDInterface {
    generate(id?: string | number | undefined): string | number {
        return id || randomUUID();
    }
}
