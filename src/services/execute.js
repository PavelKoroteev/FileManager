import { i18n } from './i18n'

export const execute = async (callback) => {
    try {
        await callback();
    } catch (e) {
        console.log(i18n.commandError);
        console.log(e);
    }
}