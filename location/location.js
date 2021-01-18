const axios = require('axios');

const getLocationLatLon = async(address) => {

    const encodedUrl = encodeURI(address);
    let data;
    try {
        const instance = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=c26c24f7c4c1ac550e7c5e6a0e8810ae`,
        });
        const resp = await instance.get();
        data = resp.data;
    } catch (e) {
        if( data === undefined ){
            throw new Error(`No hay resultados para ${address}`);
        }
    }
    const addr = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        addr,
        lat,
        lng
    }
};

module.exports = {
    getLocationLatLon
};
