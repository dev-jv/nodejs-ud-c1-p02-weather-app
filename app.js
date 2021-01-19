// --------------------------------------- <> ['location' / 'weather'] > [lat-lon / temp]
// const plc = require('./location/location');
// const wht = require('./weather/weather');
//
// const argv = require('yargs')
//
//     .command('location', '...', {
//         direction: {
//             alias: 'd',
//             desc: 'Ciudad de búsqueda',
//             demand: true
//         }
//     })
//     .command('weather', '....', {
//         latitude: {
//             alias: 't',
//             desc: 'latitud',
//             demand: true
//         },
//         longitude: {
//             alias: 'g',
//             desc: 'longitud',
//             demand: true
//         }
//     })
//     .help()
//     .argv;
//
// let comando = argv._[0];
//
// switch (comando) {
//     case "location":
//         plc.getLocationLatLon(argv.direction)
//             .then(x => {
//                 console.log(x);
//             })
//             .catch(e => {
//                 console.log(e)
//             });
//         break;
//     case "weather":
//         wht.getWeather(argv.latitude, argv.longitude)
//             .then(x => {
//                 console.log(x);
//             })
//             .catch(e => {
//                 console.log(e)
//             });
//         break;
//     default:
//         console.log("El comando no es correecto!")
// }

// --------------------------------------- <> [latitude - Longitude] > [Temperature]
// const plc = require('./location/location');
// const wht = require('./weather/weather');
//
// const argv = require('yargs').options({
//     // direction: {
//     //     alias: 'd',
//     //     desc: 'Ciudad de búsqueda',
//     //     demand: true
//     // },
//     latitude: {
//         alias: 't',
//         desc: 'latitud',
//         demand: true
//     },
//     longitude: {
//         alias: 'g',
//         desc: 'longitud',
//         demand: true
//     },
// }).argv;
//
//
// // plc.getLocationLatLon(argv.direction)
// //     .then(x => {
// //         console.log(x);
// //     })
// //     .catch(e => {
// //         console.log(e)
// //     });
//
// wht.getWeather(argv.latitude, argv.longitude)
//     .then(x => {
//         console.log(x);
//     })
//     .catch(e => {
//         console.log(e)
//     });

// --------------------------------------- <> [City] > [Temperature]
const plc = require('./location/location');
const wht = require('./weather/weather');

const colors = require('colors');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Ciudad de búsqueda',
        demand: true
    }
}).argv;

const getInfo = async(dir) => {
    try{
        const coords = await plc.getLocationLatLon(dir)
            // .then(x => {
            //     console.log(x);
            // })
            .catch(e => {
                console.log(e)
            });
        const temp = await wht.getWeather(coords.lat, coords.lng)
            // .then(x => {
            //     console.log(x);
            // })
            .catch(e => {
                console.log(e)
            });
        return (
            `   ----------------------------- // -------------\n - The weather in ${coords.addr} has a ${temp.tAct}° of temperature`.blue
        )
    } catch (e) {
        return ` - No data could be determined for ${dir}`.red
    }
};

getInfo(argv.direction)
    .then(x => {
        console.log(x);
    })
    .catch(e => {
        console.log(e)
    });
