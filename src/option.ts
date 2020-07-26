import * as core from "@actions/core";

export interface Option {
    regexPattern: string;
    regexOption: string | null;
    seachString: string;
}

export function getOption(): Option {
    return {
        regexPattern: getInput("regex_pattern"),
        regexOption: getInputOrNull("regex_option"),
        seachString: getInput("search_string"),
    };
}

function getInput(key: string): string {
    return core.getInput(key, { required: true });
}

function getInputOrNull(key: string): string | null {
    const result = core.getInput(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}
