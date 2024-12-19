import { popularPeople } from './people';
import { popularMovie, trendingMovie, topRatedMovie, nowPlayingMovie, upcomingMovie, detailMovie } from './movie';
import { topRatedTV, popularTV, airingTodayTV, onTheAirTV } from './tv';
import { listGenres, Languges } from './collections';
import { trendingAll } from './trending';
import { queryMulti } from './query';
import { getVideoKey } from './video';
import { keyWordsQuery } from './keyWordsQuery';

const getImg = 'https://image.tmdb.org/t/p/w500';

export {
    popularPeople,
    trendingMovie,
    nowPlayingMovie,
    upcomingMovie,
    detailMovie,
    trendingAll,
    popularTV,
    topRatedTV,
    airingTodayTV,
    onTheAirTV,
    queryMulti,
    topRatedMovie,
    getImg,
    getVideoKey,
    popularMovie,
    listGenres,
    Languges,
    keyWordsQuery,
};
