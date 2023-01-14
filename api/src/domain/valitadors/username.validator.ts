type usernameInputType = {
    username: string;
};

type usernameOutType = {
    username: string;
};

export class UsernameValidator {
    private data: usernameInputType;
    private attribute: usernameInputType;
    private validators: usernameInputType;

    constructor(fieldName: string, attribute?: string) {
        if (!fieldName) {
            throw new Error("Username need to be provide");
        }

        this.data = { username: fieldName.toLocaleLowerCase() };
        this.attribute = { username: attribute || "Username" };
        this.validators = { username: "required|minlength:5|maxlength:15" };
    }

    getData(): usernameOutType {
        return this.data;
    }

    getAttribute(): usernameOutType {
        return this.attribute;
    }

    getvalidators(): usernameOutType {
        return this.validators;
    }
}
