import axios from '@/core/axios'

export const ProductApi = {
    async fetchProducts () {
        const { data } = await axios.get('/products');
        return data.data;
    },  

    async fetchProduct (id) {
        const { data } = await axios.get(`/product/${id}`);
        return data.data;
    }
}