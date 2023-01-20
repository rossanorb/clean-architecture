export default class ValidationException implements Error {
    name: string;
    message: string;
    stack?: string | undefined;
    errors: object;

    constructor(errors: object) {
        this.name = "Validação";
        this.message = "Daddos inválidos";
        this.errors = errors;
    }
}
