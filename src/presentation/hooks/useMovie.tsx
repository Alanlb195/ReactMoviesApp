import { useEffect, useState } from "react";
import * as UseCases from "../../core/use-cases";
import { movieDBMovieFetcher } from "../../config/adapters/movieDB-movie.adapter";
import { FullMovie } from "../../core/entities/movie.entity";
import { Cast } from "../../core/entities/cast.entity";

export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [fullMovie, setFullMovie] = useState<FullMovie>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    }, [movieId]);

    const loadMovie = async () => {

        setIsLoading(true);

        const fullMoviePromise = UseCases.getMovieByIdUseCase(movieDBMovieFetcher, movieId);
        const castPromise = UseCases.getMovieCastUseCase(movieDBMovieFetcher, movieId);


        const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

        setFullMovie(fullMovie);
        setCast(cast);

        setIsLoading(false);

    };

    return {
        isLoading,
        fullMovie,
        cast,
    };
};
