/* eslint-disable @typescript-eslint/no-explicit-any */
import User, { userType } from "../../../../src/domain/entity/User.entity";

describe("Test user Entity", () => {
    it("Should throw error when name is invalid", () => {
        const userdata: userType = {
            name: "T",
            email: "taetakemi@ps5.jp",
            login: "tae#takemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        expect(() => new User(userdata)).toThrowError();
    });
});
