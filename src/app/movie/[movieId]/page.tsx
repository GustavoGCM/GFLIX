import { getCredits, getMovieById } from "@/services/utils";
import MovieView from "../../../components/views/movieView";

const DetailedMovie = async ({ params }: { params: { movieId: string } }) => {
  const movie = await getMovieById(+params.movieId);
  const credits = await getCredits(+params.movieId);

  return (
    <>
      <MovieView movie={movie} credits={credits} />
    </>
  );
};

export default DetailedMovie;
