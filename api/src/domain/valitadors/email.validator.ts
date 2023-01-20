type emailInputType = {
    email: string;
};

type emailOutputType = {
    email: string;
};

export default class EmailValidator {
    private data: emailInputType;
    private attribute: emailInputType;
    private validators: emailInputType;

    constructor(fieldName: string, attribute?: string) {
        this.data = { email: fieldName };
        this.attribute = { email: attribute || "E-mail" };
        this.validators = { email: "required|email" };
    }

    getData(): emailOutputType {
        return this.data;
    }

    getAttribute(): emailOutputType {
        return this.attribute;
    }

    getvalidators(): emailOutputType {
        return this.validators;
    }
}
