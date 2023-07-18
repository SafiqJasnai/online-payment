export function getSessionToken() {
    return sessionStorage.getItem('access-token');
}

export function getSessionUserToken() {
    return sessionStorage.getItem('user-token');
}

export function getSessionUserName() {
    return sessionStorage.getItem('name');
}

export function getSessionEmail() {
    return sessionStorage.getItem('email');
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

export function setSessionEmail(email) {
    sessionStorage.setItem('email', email);
}

export function sessionClear() {
    sessionStorage.clear();
}
