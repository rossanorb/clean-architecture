/* ------------------------------------------------------------------
Js Class validation
Author: Rossano Ramos Bavaresco <rossanorb@gmail.com>
year: 2020
Version: 2.0
-------------------------------------------------------------------*/

/* eslint-disable @typescript-eslint/no-explicit-any */

export type validatorType = {
    data: object;
    validators: object;
    attributes: object;
};

export class Validator {
    private data: any = {};
    private validators: any = {};
    private attributes: any = {};
    private errors: any = {};

    constructor(validator: validatorType) {
        this.data = validator.data;
        this.validators = validator.validators;
        this.attributes = validator.attributes;
        this.errors = {};
    }

    fail() {
        Object.entries(this.validators).forEach(([key, value]) => {
            this.call(key, value);
        });

        const props = Object.values(this.errors);
        if (props.length > 0) {
            return true;
        }
        return false;
    }

    call(key: string, value: any) {
        const validators = value.split("|");
        for (const validator of validators) {
            if (validator.match(/:/)) {
                const parts = validator.split(":");
                const newvalidator = parts[0];
                const param = parts[1];
                eval(
                    "this." + newvalidator + "('" + key + "','" + param + "')"
                );
                continue;
            }

            eval("this." + validator + "('" + key + "')");
        }
    }

    valid() {
        Object.entries(this.validators).forEach(([key, value]) => {
            this.call(key, value);
        });
    }

    attribute(field: string) {
        let field_name = field;
        const itHasProperty: boolean = Object.prototype.hasOwnProperty.call(
            this.attributes,
            field
        );

        if (this.attributes && itHasProperty) {
            field_name = this.attributes[field];
        }

        return field_name;
    }

    setError(field: string, validator: string, message: string) {
        const itHasProperty: boolean = Object.prototype.hasOwnProperty.call(
            this.errors,
            field
        );

        if (itHasProperty) {
            Object.assign(this.errors[field], { [validator]: `${message}` });
        }

        if (!itHasProperty) {
            Object.assign(this.errors, { [field]: {} });
            Object.assign(this.errors[field], { [validator]: `${message}` });
        }
    }

    getErrors() {
        return this.errors;
    }

    //****** filters go below *********

    required(field: string) {
        const value: string = this.data["" + field + ""];

        if (!value) {
            const field_name: string = this.attribute(field);
            this.setError(
                field,
                "required",
                `O campo ${field_name} é obrigatório`
            );
        }
    }

    email(field: string) {
        const value = this.data["" + field + ""] || "";
        const reg = new RegExp(
            /\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+/g
        );

        if (!reg.test(value)) {
            const field_name = this.attribute(field);
            this.setError(field, "email", `O ${field_name} é inválido`);
        }
    }
}
