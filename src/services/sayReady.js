import { i18n } from './i18n.js'

export const sayReady = () => {
    console.log();
    console.log(i18n.placed, process.cwd());
    console.log();
    process.stdout.write('> ');
}
