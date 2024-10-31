import axios from 'axios';

const API_KEY = `api_key=${import.meta.env.VITE_API_KEY}`;
const get = async (api) => {
    return await axios.get(api);
};

const trendingMovie = async (window_time) => {
    try {
        const res = await get('https://api.themoviedb.org/3/trending/movie/' + window_time + '?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

const trendingAll = async (window_time) => {
    try {
        const res = await get('https://api.themoviedb.org/3/trending/all/' + window_time + '?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

const queryMulti = async (q) => {
    try {
        const res = await get(
            'https://api.themoviedb.org/3/search/multi?query=' + encodeURIComponent(q) + '&' + API_KEY,
        );
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { trendingMovie, trendingAll, queryMulti };
