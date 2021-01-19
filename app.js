const plc = require('./location/location');
const wht = require('./weather/weather');

const argv = require('yargs')

    .command('location', '...', {
        direction: {
            alias: 'd',
            desc: 'Ciudad de búsqueda',
            demand: true
        }
    })
    .command('weather', '....', {
        latitude: {
            alias: 't',
            desc: 'latitud',
            demand: true
        },
        longitude: {
            alias: 'g',
            desc: 'longitud',
            demand: true
        }
    })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case "location":
        plc.getLocationLatLon(argv.direction)
            .then(x => {
                    console.log(x);
                }
            )
            .catch(e => {
                console.log(e)
            });
        break;
    case "weather":
        wht.getWeather(argv.latitude, argv.longitude)
            .then(x => {
                    console.log(x);
                }
            )
            .catch(e => {
                console.log(e)
            });
        break;
    default:
        console.log("El comando no es correecto!")
}
