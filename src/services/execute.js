import { i18n } from './i18n.js';

export const execute = async (callback, args = [], context = null) => {
    try {
        await callback.apply(context, args);
    } catch (e) {
        console.log(i18n.commandError);
        console.log(e);
    }
}