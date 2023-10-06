import {
  getGenres,
  getHighlight,
  getMoviesByGenre,
  searchMovies,
} from "@/services/utils";
import Highlight from "../components/highlight/highlight";
import FilmsSection from "../components/sections/filmSections";

export default async function Home() {
  const { genres } = await getGenres();
  const highghlitMovies = await getHighlight();
  let bgCounter = 1;
  const numBgs = 5;

  return (
    <main className="w-screen">
      <Highlight movies={highghlitMovies} />
      <div className="flex flex-col w-full pt-16 gap-10">
        <section className="sections">
          <h2 className="default-title">Em alta</h2>
          <FilmsSection popular />
        </section>
        <section className="sections">
          <h2 className="default-title">Melhor avaliado</h2>
          <FilmsSection rated />
        </section>
        <section className="sections">
          <h2 className="default-title">Em cartaz</h2>
          <FilmsSection nowPlaying />
        </section>
        <section className="sections">
          <h2 className="default-title">Em breve</h2>
          <FilmsSection upcoming />
        </section>
        {genres!.map((genre) => {
          const bg = bgCounter;
          bgCounter += 1;
          if (bg == numBgs) {
            bgCounter = 1;
          }
          return (
            <section key={genre.name} className="sections">
              <h2 className="default-title">{genre.name}</h2>
              <FilmsSection genre_id={genre.id} bgNum={bg} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
