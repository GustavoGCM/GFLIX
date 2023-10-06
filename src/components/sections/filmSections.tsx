import {
  getMoviesByGenre,
  getNowPlaying,
  getPopularMovies,
  getRelatedMovies,
  getTopRatedMovies,
  getUpCommingMovies,
} from "@/services/utils";
import Image from "next/image";
import * as bg1 from "src/assets/backgrounds/1.png";
import * as bg2 from "src/assets/backgrounds/2.png";
import * as bg3 from "src/assets/backgrounds/3.png";
import * as bg4 from "src/assets/backgrounds/4.png";
import * as bg5 from "src/assets/backgrounds/5.png";
import ScrollListSection from "../scroll/scroll";
import Link from "next/link";
import MovieCard from "../movieCard/movieCard";

interface FilmsSectionProps {
  genre_id?: number | undefined;
  upcoming?: boolean | undefined;
  rated?: boolean | undefined;
  popular?: boolean | undefined;
  nowPlaying?: boolean | undefined;
  bgNum?: number | undefined;
  related?: number | undefined;
}

const FilmsSection = async ({
  genre_id,
  nowPlaying,
  popular,
  rated,
  upcoming,
  bgNum,
  related,
}: FilmsSectionProps) => {
  const moviesByGenre = genre_id ? await getMoviesByGenre(genre_id) : null;
  const moviesNowPlaying = nowPlaying ? await getNowPlaying(1) : null;
  const moviesPopular = popular ? await getPopularMovies(1) : null;
  const moviesTopRated = rated ? await getTopRatedMovies(1) : null;
  const moviesComming = upcoming ? await getUpCommingMovies(1) : null;
  const moviesRelated = related ? await getRelatedMovies(related) : null;

  const backgrounds = [bg1, bg2, bg3, bg4, bg5];

  return (
    <ScrollListSection>
      <div className="bg-gradient-to-t from-transparent to-gray-300 z-10 absolute inset-0"></div>
      {moviesByGenre
        ? moviesByGenre.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesByGenre ? (
        <Image
          src={backgrounds[bgNum! - 1]}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
      {moviesComming
        ? moviesComming.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesComming ? (
        <Image
          src={bg2}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
      {moviesNowPlaying
        ? moviesNowPlaying.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesNowPlaying ? (
        <Image
          src={bg3}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
      {moviesPopular
        ? moviesPopular.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesPopular ? (
        <Image
          src={bg4}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
      {moviesTopRated
        ? moviesTopRated.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesTopRated ? (
        <Image
          src={bg1}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
      {moviesRelated
        ? moviesRelated.results!.map((movie) => {
            return (
              <MovieCard id={movie.id!} key={movie.id} posterPath={movie.poster_path!} title={movie.title!} />
            );
          })
        : null}
      {moviesRelated ? (
        <Image
          src={backgrounds[Math.floor(Math.random() * backgrounds.length)]}
          width={223}
          height={293}
          alt=""
          className="bg-img"
        ></Image>
      ) : null}
    </ScrollListSection>
  );
};

export default FilmsSection;
