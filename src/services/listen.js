import stream from 'stream';
import { format } from 'util'
import { execute } from './execute.js';
import { i18n } from './i18n.js';
import { sayReady } from './sayReady.js';

import { up } from '../commands/up.js';
import { defaultCommand } from '../commands/defaultCommand.js';
import { cd } from '../commands/cd.js';
import { exit } from '../commands/exit.js';
import { parseInput } from './parseInput.js';

export const listen = () => {
    process.on('uncaughtException', (err) => {
        console.log(i18n.commandError);
        console.error(err);
        console.log();

        sayReady();
    });
    
    process.on('unhandledRejection', (reason) => {
        console.log(i18n.commandError);
        console.log(reason);
        console.log();

        sayReady();
    });

    process.stdin.on('data', async (data) => {
        const { command: commandName, args, } = parseInput(data);

        const commandsMap = {
            '.exit': exit,
            up,
            cd,
        };

        const command = commandsMap[commandName] || defaultCommand;
        // switch (commandName) {
        //     case '.exit':
        //         command = exit;
        //         break;
        //     case 'up':
        //         command = up;
        //         break;
        //     case 'cd':
        //         command = cd;
        //         break;
        //     default:
        //         command = defaultCommand;
        //         break;
        // }

        await execute(command, args);

        sayReady();
    });
};
