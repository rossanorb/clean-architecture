import NoSpecialChar from "../../../../src/domain/valitadors/modules/nospecialchar";

describe("Test module function NoSpecialChar", () => {
    it("Should return characters @, &, ! as invalids", () => {
        const charsNotAllowed = NoSpecialChar("ann&tk@1990!");
        expect(charsNotAllowed).toContain("@");
        expect(charsNotAllowed).toContain("&");
        expect(charsNotAllowed).toContain("!");
    });

    it("Should not return characters invalids", () => {
        expect(NoSpecialChar("annt_k1990").length === 0).toBeTruthy();
        expect(NoSpecialChar("annt.k1990").length === 0).toBeTruthy();
    });
});
