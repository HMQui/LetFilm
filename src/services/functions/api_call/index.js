import { popularPeople } from './people';
import { popularMovie, trendingMovie, topRatedMovie } from './movie';
import { topRatedTV } from './tv';
import { movieGenres, Languges } from './collections';
import { trendingAll } from './trending';
import { queryMulti } from './query';
import { getVideoKey } from './video';
import { keyWordsQuery } from './keyWordsQuery';

const getImg = 'https://image.tmdb.org/t/p/w500';

export {
    popularPeople,
    trendingMovie,
    trendingAll,
    topRatedTV,
    queryMulti,
    topRatedMovie,
    getImg,
    getVideoKey,
    popularMovie,
    movieGenres,
    Languges,
    keyWordsQuery,
};
