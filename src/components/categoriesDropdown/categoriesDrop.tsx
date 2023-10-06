import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import { Dropdown, Flowbite } from "flowbite-react";
import { GenresResponse } from "moviedb-promise";
import Image from "next/image";
import { useContext } from "react";

interface CategoriesProps {
  genres: GenresResponse;
}

const CategoriresDropdown = ({ genres }: CategoriesProps) => {
  const { genreSearch } = useContext(mdbContext);

  return (
    <Flowbite
      theme={{
        theme: {
          dropdown: {
            floating: {
              divider: "my-1 h-px bg-gray-700",
              item: {
                base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full outline-none bg-gray-400",
              },
              style: {
                auto: "",
              },
              base: "z-50 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none"
            },
          },
        },
      }}
    >
      <Dropdown
        placeholder="right"
        label="Categorias"
        dismissOnClick={true}
        renderTrigger={() => (
          <button
            type="button"
            className="group flex items-start h-min text-start font-medium relative focus:z-10 text-gray-600 bg-gray-300 border border-transparent rounded-lg w-fit md:hidden"
            data-testid="flowbite-dropdown-target"
            aria-expanded="true"
            aria-haspopup="menu"
            id=":r7:"
            aria-controls=":r6:"
          >
            <span className="flex items-center transition-all duration-200 rounded-md text-base py-2">
              Categorias
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-2 h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </button>
        )}
      >
        {genres!.genres!.map((genre) => (
          <Dropdown.Item
            key={genre.id}
            className="text-gray-600 text-sm cursor-pointer hover:bg-gray-700"
            onClick={() => genreSearch(+genre.id!)}
          >
            {genre.name}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </Flowbite>
  );
};

export default CategoriresDropdown;
