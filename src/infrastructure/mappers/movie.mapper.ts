import {FullMovie, Movie} from '../../core/entities/movie.entity';
import { MovieReponse } from '../interfaces/movie-db.responses';
import {Result} from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMoviesDbResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title != null ? result.title : result.name,
      description: result.overview,
      releaseDate: result.release_date,
      rating: result.popularity,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }

  static fromMovieDetailResultToEntity(result: MovieReponse): FullMovie {
    return {

      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: result.release_date,
      rating: result.popularity,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,


      genres: result.genres.map( genres => genres.name),
      budget: result.budget,
      adult: result.adult,
      originalTitle: result.original_title,
      votes: result.vote_average,
      productionCompanies: result.production_companies.map( company => company.name),
    };
  }


}
