import { Home, Movie, Search, MovieDetail, TVDetail, PeopleDetail, PeopleMain, NotFound } from "../pages"

const root = "/LetFilm/"

export const publicRoute = [
    {
        component: NotFound,
        path: '*'
    },
    {
        component: Home,
        path: root
    },
    {
        component: Movie,
        path: root + "Movie/"
    },
    {
        component: Search,
        path: root + "Search/"
    },
    {
        component: MovieDetail,
        path: root + "Movie/:id"
    },
    {
        component: TVDetail,
        path: root + "TV/:id"
    },
    {
        component: PeopleDetail,
        path: root + "people/:id"
    },
    {
        component: PeopleMain,
        path: root + "people"
    },
]

export const route = {
    Home: root,
    Movie: root + "movie/",
    NowPlaying: root + "movie/" + "now-playing/",
    Upcoming: root + "movie/" + "upcoming/",
    TopRated: root + "movie/" + "top-rated/",
}