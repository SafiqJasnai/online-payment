export function getSessionToken() {
    return sessionStorage.getItem('access-token');
}

export function setSessionToken(token) {
    sessionStorage.setItem('access-token', token);
}

export function setSessionUserToken(token) {
    sessionStorage.setItem('user-token', token);
}


export function setSessionUserName(name) {
    sessionStorage.setItem('name', name);
}
export function sessionClear() {
    sessionStorage.clear();
}
