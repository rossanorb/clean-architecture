const NoSpecialChar = (inputValue: string) => {
    const arraySetOfcharacters = [];
    const chars = [
        [26, "A"],
        [26, "a"],
        [10, "0"]
    ];

    for (let i = 0; i < chars.length; i++) {
        const arrayChar: (string | number)[] = chars[i];

        const sequence = Number(arrayChar[0]);
        const character = String(arrayChar[1]);

        const setOfcharacters: string[] = Array<string>(sequence)
            .fill("0")
            .map((element, index) =>
                String.fromCharCode(character.charCodeAt(0) + index)
            );

        arraySetOfcharacters.push(setOfcharacters);
    }

    const charactersAllowed = [
        ...arraySetOfcharacters[0],
        ...arraySetOfcharacters[1],
        ...arraySetOfcharacters[2],
        ...[".", "_"]
    ];

    const charsNotAllowed = [];
    for (let i = 0; i < inputValue.length; i++) {
        if (!charactersAllowed.includes(inputValue[i])) {
            charsNotAllowed.push(inputValue[i]);
        }
    }

    return charsNotAllowed;
};

export default NoSpecialChar;
