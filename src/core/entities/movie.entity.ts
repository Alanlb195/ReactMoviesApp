export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;
}



export interface FullMovie extends Movie {
  genres: string[];
  budget: number;
  adult: boolean;
  originalTitle: string;
  votes: number;
  productionCompanies: string[];
}