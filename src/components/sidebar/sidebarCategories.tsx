"use client";
import { Flowbite, Sidebar } from "flowbite-react";
import SearchMovieInput from "../searchInputs/searchMovie";
import { useContext, useState } from "react";
import { GenresResponse, MovieResult } from "moviedb-promise";
import { mdbContext } from "@/providers/MoviesContext/mdbContext";

interface CategoriesProps {
  categories: GenresResponse;
}

const SidebarCategories = ({ categories }: CategoriesProps) => {
  const { genreSearch } = useContext(mdbContext);

  return (
    <Flowbite
      theme={{
        theme: {
          sidebar: {
            root: {
              inner:
                "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-400 py-4 px-3 ",
            },
            item: {
              base: "flex items-center  rounded-lg p-2  pl-4 text-base font-normal text-gray-600",
            },

            cta: {
              base: "flex items-center  rounded-lg  pl-4 text-base font-normal text-gray-600 hover:bg-gray-700",
            },
          },
        },
      }}
    >
      <Sidebar className="h-full bg-gray-400 hidden md:block">
        <Sidebar.Items className="mt-24">
          <Sidebar.ItemGroup className="cursor-pointer">
            
            {categories.genres!.map((genre) => {
              return (
                <Sidebar.CTA key={genre.id}>
                  <button
                    id={`${genre.id}`}
                    onClick={(e) => genreSearch(+e.currentTarget.id)}
                    className="w-full h-full p-2 text-start"
                  >
                    {genre.name}
                  </button>
                </Sidebar.CTA>
              );
            })}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Flowbite>
  );
};

export default SidebarCategories;
