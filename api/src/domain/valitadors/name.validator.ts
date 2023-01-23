type nameInputType = {
    name: string;
};

type validatorType = {
    name: string;
};

type attributeType = {
    name: string;
};

type nameOutputType = {
    name: string;
};

export default class NameValidator {
    private data: nameInputType;
    private attribute: attributeType;
    private validators: validatorType;

    constructor(fieldName: string, attribute?: string) {
        this.data = { name: fieldName };
        this.attribute = { name: attribute || "Nome" };
        this.validators = { name: "required|minlength:2" };
    }

    getData(): nameOutputType {
        return this.data;
    }

    getAttribute(): attributeType {
        return this.attribute;
    }

    getvalidators(): nameOutputType {
        return this.validators;
    }
}
