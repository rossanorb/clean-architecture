import User from "../../src/domain/entity/User.entity";

describe("Create user", () => {
    it("Should create an instance of User", () => {
        const data = {
            name: "Rossano",
            email: "rossanorb@gmail.com",
            password: "@Abc102030!",
            login: "rossano",
            active: true,
            admin: true
        };

        const user = new User(data);
        expect(user).toBeInstanceOf(User);
    });

    it("Should throw an error if parameters were not provided", () => {
        const data = {
            name: "",
            email: "rossanorb@gmail.com",
            password: "@Abc102030!",
            login: "rossano",
            active: true,
            admin: true
        };

        expect(() => new User(data)).toThrow(
            new Error("Name was not provided")
        );
    });

    it("Should creates a new user admin", () => {
        const data = {
            name: "Rossano",
            email: "rossanorb@gmail.com",
            password: "@Abc102030!",
            login: "rossano",
            active: true,
            admin: true
        };
        const user = new User(data);
        expect(user).toEqual(data);
        expect(user).toBeTruthy();
    });
});
