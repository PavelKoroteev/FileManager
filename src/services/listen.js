import { execute } from './execute.js';
import { i18n } from './i18n.js';
import { sayReady } from './sayReady.js';
import { parseInput } from './parseInput.js';

import { defaultCommand } from '../commands/defaultCommand.js';
import { exit } from '../commands/exit.js';

import { up } from '../commands/navigation/up.js';
import { cd } from '../commands/navigation/cd.js';
import { ls } from '../commands/navigation/ls.js';

import { cat } from '../commands/files/cat.js';
import { add } from '../commands/files/add.js';
import { rn } from '../commands/files/rn.js';
import { cp } from '../commands/files/cp.js';
import { rm } from '../commands/files/files/rm.js';

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
            ls,
            cat,
            add,
            rn,
            cp,
            mv: rn,
            rm,
        };

        const command = commandsMap[commandName] || defaultCommand;

        await execute(command, args);

        sayReady();
    });
};
