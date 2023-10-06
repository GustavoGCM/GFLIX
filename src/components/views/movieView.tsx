import FilmsSection from "../sections/filmSections";
import { CreditsResponse, MovieResponse } from "moviedb-promise";
import Image from "next/image";

interface MovieViewProps {
  movie: MovieResponse;
  credits: CreditsResponse;
}

const MovieView = ({ movie, credits }: MovieViewProps) => {
  const releaseDate = movie.release_date?.replace(/-/g, "/");
  const genres = movie.genres
    ?.map((genre) => genre.name!.charAt(0).toUpperCase() + genre.name!.slice(1))
    .join(", ");

  const hours = Math.floor(movie.runtime! / 60);
  const minutes = movie.runtime! % 60;
  const runtime = `${hours}h ${minutes}m`;

  return (
    <>
      <main className="flex gap-3 flex-col md:flex-row w-full mt-[22vh] px-3">
        <section className="md:w-2/3 py-14 px-2 md:px-11 bg-gray-800 min-h-[500px] h-fit rounded-lg flex gap-9 flex-col md:flex-row w-full">
          <figure className="flex flex-col gap-4 items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="postêr do filme"
              width={200}
              height={280}
              className="rounded-lg min-w-[200px]"
            ></Image>
            <p className="italic-tag text-center">{movie.tagline}</p>
          </figure>
          <div className="flex flex-col gap-5">
            <h1 className="highlight-title text-4xl">{movie.title}</h1>
            <p className="descriptions">
              {releaseDate} • {`(${movie.original_language?.toUpperCase()})`} •{" "}
              {genres} • {runtime}
            </p>
            <div className="flex items-center  gap-4">
              <div className="p-4 rounded-full border-blue-500 border-4 w-max">
                <span className="text-lg font-bold text-blue-500">{`${Math.round(
                  movie.vote_average! * 10
                )}%`}</span>
              </div>
              <p className="default-title text-lg mt-0 ml-0 md:ml-0">
                De avaliação dos usuários {`(${movie.vote_count} votos)`}
              </p>
            </div>
            <h2 className="default-title text-lg mt-0 ml-0 md:ml-0">Sinopse</h2>
            <p className="descriptions">{movie.overview}</p>
          </div>
        </section>
        x
        <aside className="md:w-2/6 py-14 px-2 md:p-5 bg-gray-800 max-h-[500px] rounded-lg flex flex-col gap-4 w-full">
          <h2 className="default-title text-lg mt-0 ml-0 md:ml-0">Elenco</h2>
          <ul className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 overflow-auto">
            {credits.cast?.slice(0, 10).map((actor) => {
              return (
                <li key={actor.id} className="actor-card">
                  <figure className="flex flex-col gap-2 pb-3">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt="foto do ator/atriz"
                      width={138}
                      height={175}
                      className="rounded-t-lg w-full"
                    ></Image>
                    <h3 className="ml-3 text-white  text-base">{actor.name}</h3>
                    <p className="ml-3 text-sm">{actor.character}</p>
                  </figure>
                </li>
              );
            })}
          </ul>
        </aside>
      </main>
      <footer>
        <section className="sections mt-6">
          <h2 className="default-title">Relacionados</h2>
          <FilmsSection related={movie.id} />
        </section>
      </footer>
    </>
  );
};

export default MovieView;
