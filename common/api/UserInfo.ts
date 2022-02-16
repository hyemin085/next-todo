import axios, {AxiosResponse} from "axios";
import {userTypes} from "../../model/user.interface";

const instance = axios.create({
    baseURL: 'http://3.34.47.186:4000/',
    headers: {
        "Content-type": "application/json"
    },
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
}

export const axiosLogin = {
    getLogin: (userId: string, password: string): Promise<userTypes> => requests.post('login', {userId, password})
}