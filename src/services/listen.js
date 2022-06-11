import stream from 'stream';

export const listen = () => {
    console.log('listen');
    process.stdin.on('data', (data) => {
        const input = data.toString().trim();

        switch (input) {
            case '.exit':
                process.emit('SIGINT');
                break;
            default:
                break;
        }
    });
};
