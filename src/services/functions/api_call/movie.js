import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

// GET Popular Movie
const popularMovie = async (page = 1) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/movie/popular?${API_KEY}&page=${page}`);
        return res.data.results;
    } catch {
        throw new Error('Failed to call API');
    }
};

// GET Trending Movie
const trendingMovie = async (window_time) => {
    try {
        const res = await get('https://api.themoviedb.org/3/trending/movie/' + window_time + '?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

// GET Top Rated Movie
const topRatedMovie = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/movie/top_rated?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { popularMovie, trendingMovie, topRatedMovie };
