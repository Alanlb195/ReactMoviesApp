import { THE_MOVIE_DB_APIKEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBMovieFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: THE_MOVIE_DB_APIKEY ?? 'no-key'
    }
})
