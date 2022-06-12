import { parseArgs } from '../cli/args.js';
import { capitalize } from '../utils/capitalize.js';

export const say = (phrase) => {
    const argsDictionary = parseArgs();

    const { username } = argsDictionary;

    if (username) {
        console.log(`${phrase}, ${capitalize(username)}!`);
    } else {
        console.log(`${phrase}!`);
    }
}
