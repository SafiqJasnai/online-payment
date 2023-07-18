import axios from 'axios';
import { apiUserHeaders, userApiBaseUrl } from '../middleware/ApiMiddleware';

const apiValidateToken = () => {
    return getAxiosPromise();
}

const getAxiosPromise = () => {
    // const data = JSON.stringify(credentials);
    const inputs = {
        method: 'get',
        url: `${userApiBaseUrl}/user/validateToken`,
        // url: 'http://127.0.0.1:8080/login',
        headers: apiUserHeaders,
        // data: data
    };
    return axios(inputs);
}

export default apiValidateToken;