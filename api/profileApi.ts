import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {

    }
}
// const instance = axios.create({
//     baseURL: 'https://neko-back.herokuapp.com/2.0',
//     ...settings
// })


    export const profileAPI = {
        me() {
            return instance.post('auth/me', {});
           
        },
        updateStatus() {
            return instance.patch('auth/me', {}); //put or patch????
        }
    }
