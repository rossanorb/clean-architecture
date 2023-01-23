/* eslint-disable @typescript-eslint/no-explicit-any */
import User, { userType } from "../../../../src/domain/entity/User.entity";

describe("Test user Entity", () => {
    it("Should throw error that name is invalid", () => {
        const userdata: userType = {
            name: "T",
            email: "taetakemi@ps5.jp",
            login: "taetakemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        expect(() => new User(userdata)).toThrowError();
    });

    it("Should throw error that lenght name is invalid", () => {
        const userdata: userType = {
            name: "T",
            email: "taetakemi@ps5.jp",
            login: "taetakemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        try {
            new User(userdata);
        } catch (e: any) {
            expect(e.errors).toMatchObject({
                name: {
                    minlength: "Campo Nome deve possuir 2 caracteres ou mais"
                }
            });
        }

        expect(() => new User(userdata)).toThrowError();
    });

    it("Should throw error that email is invalid", () => {
        const userdata: userType = {
            name: "Tae",
            email: "taetakemi@",
            login: "taetakemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        try {
            new User(userdata);
        } catch (e: any) {
            expect(e.errors).toMatchObject({
                email: {
                    email: "O E-mail é inválido"
                }
            });
        }

        expect(() => new User(userdata)).toThrowError();
    });

    it("Should throw error of username invalid", () => {
        const userdata: userType = {
            name: "Tae",
            email: "taetakemi@ps5.jp",
            login: "#tae-takemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        try {
            new User(userdata);
        } catch (e: any) {
            expect(e.errors).toMatchObject({
                username: {
                    "not-allowedchars":
                        "Username possui caracteres não permitidos: #, -"
                }
            });
        }

        expect(() => new User(userdata)).toThrowError();
    });

    it("Should throw error that password is invalid", () => {
        const userdata: userType = {
            name: "Tae",
            email: "taetakemi@ps5.jp",
            login: "taetakemi",
            password: "@takemi",
            active: true,
            admin: true
        };

        try {
            new User(userdata);
        } catch (e: any) {
            expect(e.errors).toEqual({
                password: {
                    minlength:
                        "Campo password deve possuir 8 caracteres ou mais",
                    compLexity:
                        "password não segue os requisitos de complexidade"
                }
            });
        }

        expect(() => new User(userdata)).toThrowError();
    });

    it("Should crate an User Entity", () => {
        const userdata: userType = {
            id: 1,
            name: "Tae",
            email: "taetakemi@ps5.jp",
            login: "taetakemi",
            password: "@taKemi389",
            active: true,
            admin: true
        };

        const userCreated = new User(userdata);

        expect(userCreated).toBeInstanceOf(User);
        expect(userCreated).toEqual(userdata);
    });
});
