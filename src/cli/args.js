const KEY_REGEXP = /--(\w+)/;
const KEY_VALUE_SEPARATOR = '=';

export const parseArgs = () => {
    // npm run start -- --username=your_username
    return process.argv.slice(2).reduce((dictionary, arg) => {
        const result = KEY_REGEXP.exec(arg);

        if (result) {
            const [, key] = result;

            const [, value] = arg.split(KEY_VALUE_SEPARATOR);
            if (!value) {
                console.error(`Arguments "${key}" without value has been skipped`);
            }
            dictionary[key] = value;
        }

        return dictionary;
    }, {});
};
