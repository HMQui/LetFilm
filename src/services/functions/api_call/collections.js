import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

// [GET] ListMovie Genres
const movieGenres = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/genre/movie/list?' + API_KEY);
        return res.data.genres;
    } catch {
        throw new Error('Fail to call API');
    }
};

// [GET] Languges
const Languges = async () => {
    try {
        const res = await get('https://api.themoviedb.org/3/configuration/languages?' + API_KEY);
        return res.data;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { movieGenres, Languges }
