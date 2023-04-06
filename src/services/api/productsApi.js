import axios from '@/core/axios'

export const ProductApi = {
    async fetchProducts () {
        const { data } = await axios.get('/products');
        return data.data;
    },  
}