import stream from 'stream';
import { greetings } from './cli/greetings.js';

process.stdin.resume();

export const app = () => {
    greetings();
};

app();
