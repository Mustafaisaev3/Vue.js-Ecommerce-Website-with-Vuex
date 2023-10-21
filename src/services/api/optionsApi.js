import axios from '@/core/axios'

export const OptionApi = {
    async fetchOptions () {
        const { data } = await axios.get('/options');
        return data.data;
    },
}