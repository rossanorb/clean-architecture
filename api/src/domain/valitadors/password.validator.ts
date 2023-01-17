type passwordInputType = {
    password: string;
};

type passwordOutputType = {
    password: string;
};

export class PasswordValidator {
    private data: passwordInputType;
    private attribute: passwordInputType;
    private validators: passwordInputType;

    constructor(fieldName: string, attribute?: string) {
        this.data = { password: fieldName };
        this.attribute = { password: attribute || "password" };
        this.validators = { password: "required|minlength:8" };
    }

    getData(): passwordOutputType {
        return this.data;
    }

    getAttribute(): passwordOutputType {
        return this.attribute;
    }

    getvalidators(): passwordOutputType {
        return this.validators;
    }
}
