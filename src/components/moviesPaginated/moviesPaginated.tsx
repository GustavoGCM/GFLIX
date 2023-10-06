import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import { useContext, useEffect } from "react";
import MovieCard from "../movieCard/movieCard";
import PaginationBar from "../pagination/pagination";

const MoviesPaginated = () => {
  const { moviesGenre, defaultGenre, moviesDefault, totalPages} = useContext(mdbContext);

  useEffect(() => {
    defaultGenre()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  return (
    <section className="mb-[20vh] relative grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
      <div className="w-fit sm:absolute top-[-10vh]">

<PaginationBar totalPages={totalPages} />
</div>
      {moviesGenre
        ? moviesGenre!.results!.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id!}
                posterPath={movie.poster_path!}
                title={movie.title!}
              />
            );
          })
        : moviesDefault?.results!.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id!}
                posterPath={movie.poster_path!}
                title={movie.title!}
              />
            );
          })}
          <div className="mx-auto w-fit absolute bottom-[-14vh]">

          <PaginationBar totalPages={totalPages} />
          </div>
    </section>
  );
};

export default MoviesPaginated;
