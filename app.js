
const axios = require('axios');

const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'Ciudad de búsqueda',
        demand: true
    }
}).argv;

// console.log(argv.direction);
const encodedUrl = encodeURI(argv.direction);
// console.log(encodedUrl);

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=c26c24f7c4c1ac550e7c5e6a0e8810ae`,
});

instance.get()
    .then( resp => {
        console.log(resp.data);
    })
    .catch( err => {
        console.log('error!!!!!!!!!', err)
    });
