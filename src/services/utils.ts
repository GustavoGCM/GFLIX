"use server"

import { cache } from "react";
import { mdb } from "./api";

export const getPopularMovies = cache(async (page:number) => {
  const movies = await mdb.moviePopular({
    language: "pt-BR",
    region: "BR",
    page: page
  });

  return movies;
});

export const getTopRatedMovies = cache(async (page:number) => {
  const movies = await mdb.movieTopRated({
    language: "pt-BR",
    region: "BR",
    page: page
  });

  return movies;
});

export const getUpCommingMovies = cache(async (page:number) => {
  const movies = await mdb.upcomingMovies({
    language: "pt-BR",
    region: "BR",
    page: page
  });

  return movies;
});

export const getNowPlaying = cache(async (page:number) => {
  const movies = await mdb.movieNowPlaying({
    language: "pt-BR",
    region: "BR",
    page: page
  });

  return movies;
});

export const getHighlight = cache(async () => {
  const movies = await mdb.moviePopular({
    language: "pt-BR",
    region: "BR",
  });

  const response = movies.results?.slice(0,9)

  return response!;
});

export const getGenres = cache(async () => {
  const genres = await mdb.genreMovieList({language: "pt-BR"})

  return genres;
});

export const getMoviesByGenre = cache(async (genre_id:number, page?: number) => {
  const categoryMovie = await mdb.discoverMovie({
    with_genres: `${genre_id}`,
    language: "pt-BR",
    region: "BR",
    page: page
  })

  return categoryMovie;
});

export const getMovieById = cache(async (movie_id:number) => {
  const movie = await mdb.movieInfo({
    id: movie_id,
    language: "pt-BR",
  })

  return movie;
});

export const getCredits = cache(async (movie_id:number) => {
  const credits = await mdb.movieCredits({
    id: movie_id,
    language: "pt-BR",
  })

  return credits;
});

export const getRelatedMovies = cache(async (movie_id:number) => {
  const related = await mdb.movieSimilar({
    id: movie_id,
    language: "pt-BR",
    
  })

  return related;
});

export const searchMovies = cache(async (query:string) => {
  const results = await mdb.searchMovie({
    query: query,
    language: "pt-BR",
    region: "BR"
  })

  return results;
});