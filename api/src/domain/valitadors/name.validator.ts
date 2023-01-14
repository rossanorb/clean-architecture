type nameInputType = {
    name: string;
};

type nameOutputType = {
    name: string;
};

export class NameValidator {
    private data: nameInputType;
    private attribute: nameInputType;
    private validators: nameInputType;

    constructor(fieldName: string, attribute?: string) {
        this.data = { name: fieldName };
        this.attribute = { name: attribute || "Nome" };
        this.validators = { name: "required|minlength:2" };
    }

    getData(): nameOutputType {
        return this.data;
    }

    getAttribute(): nameOutputType {
        return this.attribute;
    }

    getvalidators(): nameOutputType {
        return this.validators;
    }
}
