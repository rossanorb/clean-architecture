import UUID from "../../../../../src/infra/adapters/uuid/uuid";
import GeneratorIdAdapter from "../../../../../src/infra/adapters/uuid/generatorId.adapter";

describe("Test Generator Id", () => {
    it("Should be generate a new Id", () => {
        const uuid = new UUID(new GeneratorIdAdapter(), 1);
        const id = String(uuid.getId());
        expect(id).toHaveLength;
    });

    it("Should return the id passed by optional parameter", () => {
        const uuid = new UUID(new GeneratorIdAdapter(), 1);
        const id = uuid.getId();

        expect(id).toEqual(1);
    });
});
