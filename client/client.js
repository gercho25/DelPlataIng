const axios = require('axios').default;

const URL = 'http://localhost:9000/api';
const TOKEN = 'a70da940ce76c1217f03376a3ac725fc';

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}


// Valores permitidos
// presion: 0 -> 999.99
// caudal:  0 -> 999.99
// viento:  0.01 -> 80.99

const setValues = async () => {
    try {
        const data = [
            {
                presion: getRandom(-10, 1200),
                caudal: getRandom(-10, 1200),
                viento: (getRandom(0, 10000)/100)
            }
        ];
        console.log('Enviando -> ', data);

        const resp = await axios.post(`${URL}/${TOKEN}/valores-api`, {data});
        console.log(resp.data);
    } catch (error) {
        console.error('ERROR: ' + error.response.data.error);
    }
}

setInterval(() => {    
    setValues();    
}, 3000);
