import { i18n } from './i18n.js';
import { say } from './say.js';

export const addExitListeners = () => {
    process.on('SIGINT', () => {
        console.log();
        console.log();
        say(i18n.bye);
        process.exit(0);
    });
}
