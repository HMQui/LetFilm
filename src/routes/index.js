import { Home, Movie, Search, MovieDetail } from "../pages"

const root = "/LetFilm/"

export const publicRoute = [
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
        path: root + "MovieDetail/:id"
    },
]

export const route = {
    Home: root,
    Movie: root + "Movie/",
    NowPlaying: root + "Movie/" + "now-playing/",
    Upcoming: root + "Movie/" + "upcoming/",
    TopRated: root + "Movie/" + "top-rated/",
}