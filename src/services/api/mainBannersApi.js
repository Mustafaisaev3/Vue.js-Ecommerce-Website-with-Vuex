import axios from '@/core/axios'

export const mainBannerApi = {
    async fetchMainBanner () {
        const { data } = await axios.get('/main-banner');
        return data.data;
    },  
}