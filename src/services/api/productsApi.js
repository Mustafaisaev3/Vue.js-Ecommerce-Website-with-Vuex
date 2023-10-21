import axios from '@/core/axios'

export const ProductApi = {
    async fetchProducts (params) {
        let queryString = ''
        if (params) {
            queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&')
        }

        const url = `/products?${params ? queryString : ''}`

        const { data } = await axios.get(url);
        return data.data;
    },  

    async fetchProduct (id) {
        const { data } = await axios.get(`/product/${id}`);
        return data.data;
    }
}