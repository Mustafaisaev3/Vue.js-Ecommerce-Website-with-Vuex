import axios from '@/core/axios'

export const UserApi = {
    async login (payload) {
        // console.log('login')
        // const { data } = await axios.post('/login', payload);
        // return data.data;
        try {
            const { data } = await axios.post('/login', payload);
            return data;
        } catch (error) {
            return error.response.data;
        }
        // const { data } = await axios.post('/login', payload);
        // console.log(data)
    },  
    async register (payload) {
        try {
            const { data } = await axios.post('/register', payload);
            return data;
        } catch (error) {
            return error.response.data;
        }
    },  
}