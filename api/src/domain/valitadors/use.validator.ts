/* eslint-disable @typescript-eslint/no-explicit-any */
import { Validator } from "./validator";

export class UseValidator {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static validator: any;

    static validate(classValidator: any): boolean {
        const data = classValidator.getData();
        const validators = classValidator.getvalidators();
        const attributes = classValidator.getAttribute();

        UseValidator.validator = new Validator({
            data,
            validators,
            attributes
        });

        return !UseValidator.validator.invalid();
    }

    static getErrors(keep = false): object {
        return UseValidator.validator.getErrors(keep);
    }

    static hasError(): boolean {
        return UseValidator.validator.hasError();
    }
}
