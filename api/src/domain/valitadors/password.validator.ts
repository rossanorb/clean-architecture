type passwordInputType = {
    password: string;
    confirm_password: string;
};

type validatorType = {
    password: string;
};

type attributeType = {
    password: string;
};

type passwordOutputType = {
    password: string;
};

export class PasswordValidator {
    private data: passwordInputType;
    private attribute: attributeType;
    private validators: validatorType;

    constructor(
        password: string,
        confirm_password: string,
        attribute?: string
    ) {
        this.data = { password: password, confirm_password: confirm_password };
        this.attribute = {
            password: attribute || "password"
        };
        this.validators = { password: "required|minlength:8|password|confirm" };
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
