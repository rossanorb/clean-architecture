function hasRepeatingCharactersSequence(inputValue: string) {
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === inputValue[i + 1]) {
            return true;
        }
    }
    return false;
}

function isInvalidlength(inputValue: string): boolean {
    const InputLength = Number(inputValue.length);

    if (InputLength < 8 || InputLength > 20) {
        return true;
    }

    return false;
}

function hasNotSpecialChars(input: string): boolean {
    const specialCharsAllowed = [
        "!",
        "@",
        "#",
        "$",
        "%",
        "&",
        "*",
        "?",
        ":",
        "|",
        ">",
        "<",
        "+",
        "-",
        "=",
        "_",
        "¨"
    ];

    const strings = input.split("");
    const even = (element: string) => {
        return specialCharsAllowed.includes(element);
    };

    return !strings.some(even);
}

function hasNotUpperAndLowerCaseChar(input: string): boolean {
    const strings = input.split("");
    const uppercase = (element: string) => {
        return element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90;
    };

    const hasUppercase = !strings.some(uppercase);

    const lowercase = (element: string) => {
        return element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122;
    };

    const hasLowercase = !strings.some(lowercase);

    return hasLowercase || hasUppercase;
}

const Password = (inputValue: string) => {
    if (hasRepeatingCharactersSequence(inputValue)) {
        return false;
    }

    if (isInvalidlength(inputValue)) {
        return false;
    }

    if (hasNotSpecialChars(inputValue)) {
        return false;
    }

    if (hasNotUpperAndLowerCaseChar(inputValue)) {
        return false;
    }

    return true;
};

export default Password;
