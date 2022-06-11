import { addExitListeners } from './services/exit.js';
import { i18n } from './services/i18n.js';
import { say } from './services/say.js';
import { sayReady } from './services/sayReady.js';
import { listen } from './services/listen.js';
import { homedir } from 'os';

process.stdin.resume();

export const app = () => {
    addExitListeners();
    listen();

    say(i18n.welcome);

    process.chdir(homedir());
    sayReady();
};

app();
