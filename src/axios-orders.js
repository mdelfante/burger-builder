import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-9b2ca-default-rtdb.firebaseio.com/'
});

export default instance;