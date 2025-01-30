import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBMovieFetcher } from '../../config/adapters/movieDB-movie.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBMovieFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBMovieFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBMovieFetcher);
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBMovieFetcher);

    const [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);

  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    // methods

    popularNextPage: async() => {
      popularPageNumber ++;
      const popularMovies = await UseCases.moviesPopularUseCase(movieDBMovieFetcher, {
        page: popularPageNumber
      });
      setPopular( prev => [...prev, ...popularMovies] );
    }


  };
};
