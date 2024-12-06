import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

//  [GET] popular TV
const popularTV = async (page = 1) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/tv/popular?${API_KEY}&page=${page}`);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

//  [GET] airing today TV
const airingTodayTV = async (page = 1) => {    
    try {
        const res = await get(`https://api.themoviedb.org/3/tv/airing_today?${API_KEY}&page=${page}`);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

//  [GET] on the air TV
const onTheAirTV = async (page = 1) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/tv/on_the_air?${API_KEY}&page=${page}`);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

//  [GET] top rated TV
const topRatedTV = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/tv/top_rated?' + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { topRatedTV, popularTV, airingTodayTV, onTheAirTV };
