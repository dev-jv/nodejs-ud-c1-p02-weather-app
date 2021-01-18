const plc = require('./location/location');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Ciudad de búsqueda',
        demand: true
    }
}).argv;

plc.getLocationLatLon(argv.direction)
    .then( x => {
        console.log(x);
        }
    )
    .catch( e => {
        console.log(e)
    });
