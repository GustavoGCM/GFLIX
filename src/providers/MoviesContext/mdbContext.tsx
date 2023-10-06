"use client";

import { getGenres, getMoviesByGenre, searchMovies } from "@/services/utils";
import {
  DiscoverMovieResponse,
  GenresResponse,
  MovieResult,
} from "moviedb-promise/dist/request-types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface MdbContextChildren {
  children: ReactNode;
}

interface IMdbContext {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  queryHeader: string;
  setQueryHeader: Dispatch<SetStateAction<string>>;
  genreQuery: string | undefined;
  setGenreQuery: Dispatch<SetStateAction<string | undefined>>;
  movies: MovieResult[] | null | undefined;
  setMovies: Dispatch<SetStateAction<MovieResult[] | null | undefined>>;
  moviesGenre: DiscoverMovieResponse | null;
  setMoviesGenre: Dispatch<SetStateAction<DiscoverMovieResponse | null>>;
  querySearch: (queryValue: string) => Promise<MovieResult[] | undefined>;
  genreSearch: (genreId: number) => void;
  defaultGenre: () => Promise<void>;
  moviesDefault: DiscoverMovieResponse | null | undefined;
  genres: GenresResponse | null | undefined;
  setGenres: Dispatch<SetStateAction<GenresResponse | null | undefined>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageChange: (page: number) => Promise<void>;
  totalPages: number;
}

const mdbContext = createContext<IMdbContext>({} as IMdbContext);

const MdbProvider = ({ children }: MdbContextChildren) => {
  const [query, setQuery] = useState("");
  const [queryHeader, setQueryHeader] = useState("");
  const [movies, setMovies] = useState<MovieResult[] | null | undefined>(null);
  const [moviesDefault, setMoviesDefault] = useState<
    DiscoverMovieResponse | null | undefined
  >(null);
  const [genreQuery, setGenreQuery] = useState<string | undefined>("");
  const [moviesGenre, setMoviesGenre] = useState<DiscoverMovieResponse | null>(
    null
  );
  const [genres, setGenres] = useState<GenresResponse | null | undefined>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genreId, setGenreId] = useState(0);

  const querySearch = async (queryValue: string) => {
    setQuery(queryValue);

    const result = await searchMovies(queryValue);

    const movieResult = result.results?.slice(0, 5);

    setMovies(movieResult);
    return movieResult;
  };

  const genreSearch = async (genreId: number) => {
    const movies = await getMoviesByGenre(genreId);
    const genres = await getGenres();
    const genre = genres.genres!.find((categorie) => categorie.id == genreId);
    setGenreQuery(genre!.name);
    setMoviesGenre(movies);
    setGenreId(genreId);
    setPage(1);
    setTotalPages(movies.total_pages!);
  };

  const defaultGenre = async () => {
    const moviesDefault = await getMoviesByGenre(28);

    setGenreQuery("Ação");

    setGenreId(28);
    setPage(1);
    setTotalPages(moviesDefault.total_pages!);
    setMoviesDefault(moviesDefault!);
  };

  const pageChange = async (page: number) => {
    const movies = await getMoviesByGenre(genreId, page);

    setMoviesDefault(null);
    setPage(page);
    setMoviesGenre(movies);
  };

  return (
    <mdbContext.Provider
      value={{
        movies,
        query,
        queryHeader,
        setMovies,
        setQuery,
        setQueryHeader,
        querySearch,
        genreQuery,
        setGenreQuery,
        genreSearch,
        moviesGenre,
        setMoviesGenre,
        defaultGenre,
        moviesDefault,
        genres,
        setGenres,
        page,
        setPage,
        pageChange,
        totalPages,
      }}
    >
      {children}
    </mdbContext.Provider>
  );
};

export { mdbContext, MdbProvider };
