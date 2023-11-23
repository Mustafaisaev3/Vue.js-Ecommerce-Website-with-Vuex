import axios from '@/core/axios'

export const UserMessageApi = {
    async sendMessage (payload) {
        try {
            const { data } = await axios.post('/user_message', payload);
            return data
        } catch (error) {
            return error.response.data;
        }
    },  
}