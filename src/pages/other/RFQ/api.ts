type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const URL_BASE = 'https://demo-summerenergy.enerex.com/api';

export const apiFetch = (method: HttpMethod = 'GET', endpoint: string, data?: any) => {
    const url = `${URL_BASE}/${endpoint}`;
    const token =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9ETTFNemswUlVFeVJrSTVSREl3TkRRNU4wRkdSVUkxTkVKRU0wSXpOVFU1TWtReE9UZzRRUSJ9.eyJpc3MiOiJodHRwczovL2VuZXJneWZyYW1ld29ya3MtcWEuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVhMjFiYTU2YTZmZGFlMTBlYjM1NzMzZSIsImF1ZCI6WyJodHRwczovL2NvcmVtYXJrZXRwbGFjZS5jb20iLCJodHRwczovL2VuZXJneWZyYW1ld29ya3MtcWEuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY5MjY1MzIxMywiZXhwIjoxNjkyNzM5NjEzLCJhenAiOiI0b3V5d3NiWnYwZGxWWU5mNURQZjgzZEZYUTJNN2dZciIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgYWNjZXNzOkNNIiwiZ3R5IjoicGFzc3dvcmQifQ.Rj-uf7DFYVz02KPc6Goso_HjGCvhjMf98nGx2fihVUxG0zq4wGqX5IzOYpc3fOT7UQzLCeLc7e7K-63g1l_6G9geR5Zts1erh62ggQt0s0NL7ugoiZwOHUHISX-RcOQTcW4GgFVaPyI2829b0V4oIQvMy3zjZfsG10B8L6IkhGR6_1m0P3mXUmFvQlYSjKoQl34Hzu6jt6nxqXOZP7L8fdwIqsxU2Gy7at7EdR5cllDo05uZwG5rcO1N89yAYxkWxKdYEv8S6ICzlajbbVQSTsbVfTNY7DvepUBJUdyOFS0mCFjb3Y-7APhcKOa84rHPIcrYuf9RYXxIuc4qQDsJow';

    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
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
