import * as core from "@actions/core";
import { getOption } from "./option";

async function run() {
    try {
        const option = getOption();
        let regex;
        if (option.regexOption == null) {
            regex = new RegExp(option.regexPattern);
        } else {
            regex = new RegExp(option.regexPattern, option.regexOption);
        }
        const match = option.seachString.match(regex);
        if (match != null) {
            core.setOutput("matched", "true");
            core.setOutput("matched_first", match[0]);
            core.setOutput("matched_json", JSON.stringify(match));
            if (match.index != undefined) {
                core.setOutput("matched_has_index", "true");
                core.setOutput("matched_index", `${match.index}`);
            } else {
                core.setOutput("matched_has_index", "false");
            }
        } else {
            core.setOutput("matched", "false");
        }
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
