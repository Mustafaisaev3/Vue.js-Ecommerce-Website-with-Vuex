import axios from '@/core/axios'

export const OrderApi = {
    async createOrder (payload) {
        try {
            const { data } = await axios.post('/order', payload);
            return data;
        } catch (error) {
            return error.response.data;
        }
    },   
}