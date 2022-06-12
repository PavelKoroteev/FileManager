export const parseInput = (data) => {
    const input = data.toString().trim();

    const [command, ...args] = input.split(' ');

    return {
        command,
        args,
    }
}
