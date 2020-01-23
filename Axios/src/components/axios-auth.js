import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejsaxiosdb.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'som data';

export default instance;