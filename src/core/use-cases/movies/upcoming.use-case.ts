import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import { MoviesDBResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MoviesDBResponse>('/upcoming');

    return upcoming.results.map(result =>
      MovieMapper.fromMoviesDbResultToEntity(result),
    );
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching top rated movies - Upcoming`);
  }
};
