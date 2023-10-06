"use client";

import { GenresResponse } from "moviedb-promise";
import SidebarCategories from "../sidebar/sidebarCategories";
import { useContext } from "react";
import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import MoviesPaginated from "../moviesPaginated/moviesPaginated";
import CategoriresDropdown from "../categoriesDropdown/categoriesDrop";

interface CategoriesProps {
  genres: GenresResponse;
}

const CategoriesView = ({ genres }: CategoriesProps) => {
  const { genreQuery } = useContext(mdbContext);
  return (
    <div className="flex gap-10 max-w-[100vw]">
      <SidebarCategories categories={genres} />
      <main className="pt-[22vh] xl:pt-[8%]  flex flex-col gap-4 sm:gap-14 md:gap-20 lg:gap-24 w-fit m-auto md:m-0 md:w-full max-w-full">
        <h2 className="default-title text-2xl font-bold ml-0">{genreQuery}</h2>
        <CategoriresDropdown genres={genres} />
        <MoviesPaginated />
      </main>
    </div>
  );
};

export default CategoriesView;
