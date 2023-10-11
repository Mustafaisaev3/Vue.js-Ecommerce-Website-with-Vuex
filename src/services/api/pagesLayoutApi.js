import axios from '@/core/axios'

export const pagesLayoutApi = {
    async fetchPageLayout (name) {
        const { data } = await axios.get(`/get-page-layout/${name}`);
        return data.data;
    },  
}