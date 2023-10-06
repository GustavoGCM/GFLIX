import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import { useContext } from "react";

const SearchMovieInput = () => {
  const { querySearch } = useContext(mdbContext);
  
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-600 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          onKeyDown={(e) => e.stopPropagation()}
          type="text"
          onChange={(e) => querySearch(e.target.value)}
          className="search-input"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default SearchMovieInput;
