
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Ciudad de búsqueda',
        demand: true
    }
}).argv;

console.log(argv.direction);
