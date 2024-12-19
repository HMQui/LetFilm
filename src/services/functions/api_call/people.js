import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

// [GET] popular people
const popularPeople = async (page = 1) => {
    try {
        const res = await get('https://api.themoviedb.org/3/person/popular?' + API_KEY + `&page=${page}`);
        return res.data;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { popularPeople, }