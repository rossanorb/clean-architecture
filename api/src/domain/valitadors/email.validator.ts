type emailInputType = {
    email: string;
};

type validatorType = {
    email: string;
};

type attributeType = {
    email: string;
};

type emailOutputType = {
    email: string;
};

export default class EmailValidator {
    private data: emailInputType;
    private attribute: attributeType;
    private validators: validatorType;

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
