import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

const keyWordsQuery = async (keyWords) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/search/keyword?${API_KEY}&query=${keyWords}`);
        return res.data.results;
    } catch {
        throw new Error('Failed to call API');
    }
}

export { keyWordsQuery }