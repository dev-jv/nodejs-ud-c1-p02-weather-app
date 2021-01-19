const axios = require('axios');

const getWeather  = async (lat, lon) => {

    // const encodedUrl = encodeURI(address);
    let data;
    try {
        const instance = axios.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c26c24f7c4c1ac550e7c5e6a0e8810ae`,
        });
        const resp = await instance.get();
        data = resp.data;
    } catch (e) {
        if( data === undefined ){
            throw new Error(`No hay resultados para lat = ${lat} & lon = ${lon}`);
        }
    }
    const addr = data.name;
    const tMax = data.main.temp_max;
    const tMin = data.main.temp_min;

    return {
        addr,
        tMax,
        tMin
    }
};

module.exports = {
    getWeather
};
