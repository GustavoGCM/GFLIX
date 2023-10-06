"use client";

import Image from "next/image";
import * as Play from "src/assets/play.svg";
import * as Plus from "src/assets/plus.svg";
import CarouselSection from "../carousel/carousel";
import { MovieResult } from "moviedb-promise";
import { useRouter } from "next/navigation";

interface HighlightProps {
  movies: MovieResult[];
}

const Highlight = ({ movies }: HighlightProps) => {
  const mainMovie = movies;
  const router = useRouter();

  return (
    <CarouselSection>
      {mainMovie.map((movie) => {
        return (
          <div className="w-full h-full " key={movie.id}>
            <div className="relative z-20 flex flex-col justify-between h-full">
              <div className="highlight-shadow"></div>
              <header className="flex flex-col gap-4 mt-12 mx-16 z-20">
                <h1 className="highlight-title">{movie.title}</h1>
                <p className="text-p-1 line-clamp-3 text-base">
                  {movie.overview}
                </p>
              </header>
              <div className="flex gap-4 flex-col md:flex-row z-20 w-fit mb-12 mx-16">
                <button className="icon-button bg-white/70 hover:bg-white hover:scale-95 ease-in-out duration-150">
                  <Image src={Play} alt="" width={24} height={24}></Image>
                  <p className="font-semibold">Assistir</p>
                </button>
                <button
                  onClick={() => router.push(`/movie/${movie.id}`)}
                  className="icon-button bg-blue-500/30 hover:scale-95 ease-in-out duration-150 hover:bg-blue-500"
                >
                  <Image src={Plus} alt="" width={24} height={24}></Image>
                  <p className="text-white">Ver mais</p>
                </button>
              </div>
            </div>
            <Image
              className="highlight-img z-10"
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt=""
              width={500}
              height={500}
            ></Image>
          </div>
        );
      })}
    </CarouselSection>
  );
};

export default Highlight;
