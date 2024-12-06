import axios from 'axios';

const API_KEY = 'api_key=803ff6df56be7706d5cc03bccc570e58';

const get = async (api) => {
    try {
        const response = await axios.get(api);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

const filterFunction = async (filterItem, page, type) => {                
    try {
        // Start with base URL and API key
        let url = `https://api.themoviedb.org/3/discover/${type}?${API_KEY}`;

        // Append additional filters
        filterItem.forEach((item) => {
            if (item.type === 'sortBy') {
                url += `&${item.value.key}=${item.value.value}`
            }
            else if (item.type === 'filter') {
                const dataFilters = item.value
                dataFilters.forEach(dataFilter => {
                    // Add option Genres
                    if (dataFilter.type === 'genres') {
                        const dataGenres = dataFilter.value
                        url += `&${dataGenres.key}=`
                        dataGenres.value.forEach((genre, index) => {
                            if (index === 0) {
                                url += genre
                            }
                            else {
                                url += ',' + genre
                            }
                        })
                    }
                    // Add option keywords
                    else if (dataFilter.type === 'Keywords') {
                        const dataKeywords = dataFilter.value
                        url += `&${dataKeywords.key}=`
                        dataKeywords.value.forEach((keyword, index) => {
                            if (index === 0) {
                                url += keyword
                            }
                            else {
                                url += ',' + keyword
                            }
                        })
                    }
                    // Add orthers options
                    else {
                        const data = dataFilter.value
                        if (data.value !== null) {
                            url += `&${data.key}=${data.value}`
                        }
                    }
                })
            }
        });

        url += `&page=${page}`        
        // Fetch data using `get` helper
        const res = await get(url);

        return res.results;
    } catch (error) {
        console.error('Failed to call API:', error.message);
        throw new Error('Fail to call API');
    }
};

export { filterFunction };
