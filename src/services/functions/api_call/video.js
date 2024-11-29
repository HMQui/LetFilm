import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';
const get = async (api) => {
    return await axios.get(api);
};

const getVideoKey = async (type, id) => {
    try {
        const res = await get(`https://api.themoviedb.org/3/${type}/${id}/videos?` + API_KEY);
        return res.data.results;
    } catch {
        throw new Error('Fail to call API');
    }
};

export { getVideoKey }
