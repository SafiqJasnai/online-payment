import axios from 'axios';
import { apiBaseHeaders } from '../middleware/ApiMiddleware';

const apiUserLogin = (credentials) => {
    return getAxiosPromise(credentials);
}

const getAxiosPromise = (credentials) => {
    const data = JSON.stringify(credentials);
    const inputs = {
        method: 'post',
        // url: `${userApiBaseUrl}/login`,
        url: 'http://127.0.0.1:8080/login',
        headers: apiBaseHeaders,
        data: data
    };
    return axios(inputs);
}

export default apiUserLogin;