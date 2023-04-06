import axios from '@/core/axios'

export const CategoryApi = {
    async fetchCategories () {
        const { data } = await axios.get('/category');
        return data.data;
    },  
}