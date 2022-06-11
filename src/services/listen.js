import stream from 'stream';
import { format } from 'util'
import { i18n } from './i18n.js';
import { sayReady } from './sayReady.js';

export const listen = () => {

    process.stdin.on('data', (data) => {
        const input = data.toString().trim();

        switch (input) {
            case '.exit':
                process.emit('SIGINT');
                break;
            default:
                console.log();
                console.log(i18n.invalidInput);
                break;
        }

        sayReady();
    });
};
