import { parseArgs } from './args.js';
import { capitalize } from '../utils/capitalize.js';

const welcome = 'Welcome to the File Manager';

export const greetings = () => {
    const argsDictionary = parseArgs();

    const { username } = argsDictionary;

    if (username) {
        console.log(`${welcome}, ${capitalize(username)}!`);
    } else {
        console.log(`${welcome}!`);
    }
}