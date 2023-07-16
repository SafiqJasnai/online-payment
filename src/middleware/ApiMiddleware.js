/* eslint-disable no-unused-vars */

import { getSessionToken } from "./session-utils";

// #region Configuration
const ENV_LOCAL = {
    userApi: 'http://localhost:8080',
    adminApi: 'http://localhost:8081',
    envId: 'LOCAL_',
};
// #endregion Configuration

// const env_default_automap = (hostname, isHttps) => {
//     return isHttps ? {
//         cepAdminApi: `https://${hostname}:3030`,
//         campaignApi: `https://${hostname}:3040`,
//         surveyApi: `https://${hostname}:3000`,
//         ccppApi: `https://${hostname}:3021`,
//         envId: '',
//     } : {
//         cepAdminApi: `http://${hostname}:3030`,
//         campaignApi: `http://${hostname}:3040`,
//         surveyApi: `http://${hostname}:3000`,
//         ccppApi: `http://${hostname}:3021`,
//         envId: '',
//     }
// };

export const domainAwareConfig = () => {
    const hostname = window?.location?.hostname;
    // const port = window?.location?.port;
    // const isHttps = window?.location?.protocol?.startsWith('https');
    switch (hostname) {
        case 'localhost':           return ENV_LOCAL;
        case '127.0.0.1':           return ENV_LOCAL;     
        default: return ENV_LOCAL;
    }
}

export const adminApiBaseUrl = domainAwareConfig()?.adminApi;
export const userApiBaseUrl = domainAwareConfig()?.userApi;

export const apiUserHeaders = {
    'Content-Type': 'application/json',
    'x-access-token': getSessionToken(),
}

export const apiAdminHeaders = {
    'Content-Type': 'application/json',
    'x-access-token': getSessionToken(),
}

export const apiBaseHeaders = {
    'Content-Type': 'application/json'
}

export const formDataFromFile = (fileData, key) => {
    const formData = new FormData();
    formData.append(key, fileData);
    return formData;
}