import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieReponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { FullMovie } from "../../entities/movie.entity";


export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number,): Promise<FullMovie> => {


    try {
        
        const movieResponse = await fetcher.get<MovieReponse>(`/${ movieId }`);
        
        const fullMovie = MovieMapper.fromMovieDetailResultToEntity(movieResponse);

        return fullMovie;

    }

    catch (error) {
        throw new Error(`Cannot get the movie by id: ${movieId}`);
    }
}