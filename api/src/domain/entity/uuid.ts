import UUIDInterface from "../../infra/adapters/uuid/uuid.interface";

export default class UUID {
    private id: string | number;

    constructor(readonly gereratorId: UUIDInterface, id?: string | number) {
        this.id = this.gereratorId.generate(id);
    }

    getId(): string | number {
        return this.id;
    }
}
