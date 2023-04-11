import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {

    }
}
const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    ...settings
})


    export const profileAPI = {
        me() {
            const promise = instance.post('auth/me', {});
            return promise;
        }
    }
