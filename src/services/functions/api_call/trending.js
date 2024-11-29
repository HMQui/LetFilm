import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

// GET Trending All Types
const trendingAll = async (window_time) => {
    try {
        const res = await get('https://api.themoviedb.org/3/trending/all/' + window_time + '?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { trendingAll }  
