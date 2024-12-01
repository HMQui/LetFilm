import {
    Home,
    Movie,
    Search,
    MovieDetail,
    TVDetail,
    PeopleDetail,
    PeopleMain,
    NotFound,
    MovieNowPlaying,
    MovieUpcoming,
    MovieTopRated,
} from '../pages';

const root = '/LetFilm/';

export const publicRoute = [
    {
        component: NotFound,
        path: '*',
    },
    {
        component: Home,
        path: root,
    },
    {
        component: Movie,
        path: root + 'movie/',
    },
    {
        component: MovieUpcoming,
        path: root + 'movie/upcoming',
    },
    {
        component: MovieNowPlaying,
        path: root + 'movie/now-playing',
    },
    {
        component: MovieTopRated,
        path: root + 'movie/top-rated',
    },
    {
        component: Search,
        path: root + 'Search/',
    },
    {
        component: MovieDetail,
        path: root + 'movie/:id',
    },
    {
        component: TVDetail,
        path: root + 'tv    /:id',
    },
    {
        component: PeopleDetail,
        path: root + 'people/:id',
    },
    {
        component: PeopleMain,
        path: root + 'people',
    },
];

export const route = {
    Home: root,
    Movie: root + 'movie/',
    NowPlaying: root + 'movie/' + 'now-playing/',
    Upcoming: root + 'movie/' + 'upcoming/',
    TopRated: root + 'movie/' + 'top-rated/',
};
