import { Home, Movie } from "../pages"

const root = "/LetFilm/"

export const publicRoute = [
    {
        component: Home,
        path: root
    },
    {
        component: Movie,
        path: root + "Movie/"
    }
]

export const route = {
    Home: root,
    Movie: root + "Movie/",
    NowPlaying: root + "Movie/" + "now-playing/",
    Upcoming: root + "Movie/" + "upcoming/",
    TopRated: root + "Movie/" + "top-rated/",
}