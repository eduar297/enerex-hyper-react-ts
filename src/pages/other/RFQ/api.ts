type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export const apiFetch = async (method: HttpMethod = 'GET', endpoint: string, data?: any) => {
    const URL_BASE = window.location.origin + '/api';
    var userData = await JSON.parse(localStorage.getItem('currentUserData') ?? '');
    const url = `${URL_BASE}/${endpoint}`;
    const token = userData.accessToken;

    const headers = {
        'Content-Type': 'application/json',
        Authorization: token,
    };

    const options: RequestInit = {
        method,
        headers,
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(url, options).then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
};
