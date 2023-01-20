type usernameInputType = {
    username: string;
};

type usernameOutType = {
    username: string;
};

export default class UsernameValidator {
    private data: usernameInputType;
    private attribute: usernameInputType;
    private validators: usernameInputType;

    constructor(fieldName: string, attribute?: string) {
        this.data = { username: fieldName.toLocaleLowerCase() || "" };
        this.attribute = { username: attribute || "Username" };
        this.validators = {
            username: "required|minlength:5|maxlength:15|nospecialchar"
        };
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
