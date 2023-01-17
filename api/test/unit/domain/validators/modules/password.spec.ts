import Password from "../../../../../src/domain/valitadors/modules/password";
/****
 * Password must have length min 8, max 20 characters
 * Password must have special characters
 * Password must not have repeating characters in sequence
 * Passwprd must have at least one uppercase letter
 * Passwprd must have at least one lowercase letter
 */

describe("Test password module", () => {
    it("Should return that password is valid", () => {
        expect(Password("@Test123456")).toBeTruthy();
    });
    it("Should not repeating characters in sequence ", () => {
        expect(Password("@Test123456")).toBeTruthy();
    });

    it("should return invalid cuz password length is minor than 8 characters ", () => {
        expect(Password("13456")).toBeFalsy();
    });

    it("should return invalid cuz password length is greater than 20 characters ", () => {
        expect(Password("1234567890_1234567890")).toBeFalsy();
    });

    it("Should return true cuz have at least one special character ", () => {
        expect(Password("Test123#456")).toBeTruthy();
        expect(Password("!Test123456")).toBeTruthy();
        expect(Password("Te@st123456")).toBeTruthy();
        expect(Password("Te@st123_56")).toBeTruthy();
    });

    it("Should return false cuz does not have any special character ", () => {
        expect(Password("pasword213")).toBeFalsy();
        expect(Password("cuteBunyFuny")).toBeFalsy();
        expect(Password("Test123456")).toBeFalsy();
        expect(Password("pas123Word56")).toBeFalsy();
    });

    it("Should be invalid, no lowercase letter", () => {
        expect(Password("@CUTEBUNY")).toBeFalsy();
    });

    it("Should be invalid, no uppercase letter", () => {
        expect(Password("@cutebuny")).toBeFalsy();
    });

    it("Should be valid, at least one uppercase letter", () => {
        expect(Password("@cuteBuny")).toBeTruthy();
        expect(Password("@CuteBuny")).toBeTruthy();
    });

    it("Should be valid, at least one lowercase letter", () => {
        expect(Password("@CUTEBUNy")).toBeTruthy();
        expect(Password("@cUteBUNy")).toBeTruthy();
        expect(Password("@cUteBUNy132")).toBeTruthy();
    });
});
