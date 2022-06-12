import nodeOs from 'os';

// Get EOL (default system End-Of-Line)
// os --EOL
// Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
// os --cpus
// Get home directory:
// os --homedir
// Get current system user name (Do not confuse with the username that is set when the application starts)
// os --username
// Get CPU architecture for which Node.js binary has compiled
// os --architecture

export const os = async (argument) => {

    switch (argument) {
        case '--EOL':
            console.log(nodeOs.EOL);
            break;
        case '--cpus':
            console.log(nodeOs.cpus());
            break;
        case '--homedir':
            console.log(nodeOs.homedir());
            break;
        case '--username':
            console.log(nodeOs.userInfo().username);
            break;
        case '--architecture':
            console.log(nodeOs.arch());
            break;
        default:
            break;
    }
}
