import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const getImg = 'https://image.tmdb.org/t/p/w500'
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

const topRatedMovie = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/movie/top_rated?' + API_KEY)
        return res.data.results
    } catch {
        throw new Error('Fail to call API');
    }
}

const topRatedTV = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/tv/top_rated?' + API_KEY)
        return res.data.results
    } catch {
        throw new Error('Fail to call API');
    }
}

const getVideoKey = async (type, id) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/${type}/${id}/videos?` + API_KEY)
        return res.data.results
    } catch {
        throw new Error('Fail to call API');
    }
}

const popularPeople = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/person/popular?' + API_KEY)
        return res.data.results
    }
    catch {
        throw new Error('Fail to call API');
    }
}

export { trendingMovie, trendingAll, queryMulti, topRatedMovie, topRatedTV, getImg, getVideoKey, popularPeople };
