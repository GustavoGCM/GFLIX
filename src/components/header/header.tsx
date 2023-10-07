"use client";

import Image from "next/image";
import * as Logo from "src/assets/GFLIX.svg";
import { Navbar, Dropdown, Flowbite } from "flowbite-react";
import { useContext } from "react";
import SearchMovieInput from "../searchInputs/searchMovie";
import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import { GenresResponse } from "moviedb-promise";


interface HeaderProps {
  genres?: GenresResponse
}

const Header = ({genres}: HeaderProps) => {
  const { queryHeader, movies,  genreSearch, moviesDefault} = useContext(mdbContext);

  

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
                auto: ""
              }
            },
          },
          navbar: {
            root: {
              base: 'px-2 py-2.5 sm:px-4'
            }
          }
        },
      }}
    >
      <Navbar
        fluid
        className="bg-gray-400 min-w-[100vw] py-8 px-4 fixed top-0 z-[51]"
      >
        <Navbar.Brand className="md:ml-8">
          <Image src={Logo} width={87} height={38} alt=""></Image>
        </Navbar.Brand>
        <Navbar.Toggle className="hover:scale-x-110 ease-in-out duration-150 hover:border-none hover:bg-transparent focus:ring-0" />
        <Navbar.Collapse
          translate="yes"
          className="ease-linear duration-150 md:mr-8"
          theme={{
            list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium md:items-center",
          }}
        >
          <div className="ml-3 my-2 md:ml-0 md:my-0">
            <Dropdown
              label="Dropown search"
              dismissOnClick={false}
              className="bg-gray-400 border-none w-[95%] md:w-[400px]"
              renderTrigger={() => (
                <svg
                  className="w-4 h-4 cursor-pointer text-gray-500 dark:text-gray-400"
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
              )}
            >
              <Dropdown.Header>
                <SearchMovieInput />
              </Dropdown.Header>
              <Dropdown.Item as="p" className="cursor-default text-gray-600">
                Pesquisando por{" "}
                {queryHeader.length > 0 ? `"${queryHeader}"` : "..."}
              </Dropdown.Item>

              {movies
                ? movies.map((movie) => (
                    <Dropdown.Item
                      key={movie.id}
                      as="a"
                      href={`/movie/${movie.id}`}
                      className="text-gray-600 text-sm cursor-pointer hover:bg-gray-700"
                    >
                      <div className="flex gap-2">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          alt="Imagem do filme"
                          width={100}
                          height={60}
                        ></Image>
                        <p className="self-center text-gray-500">
                          {movie.title}
                        </p>
                      </div>
                    </Dropdown.Item>
                  ))
                : null}
            </Dropdown>
          </div>

          <Navbar.Link
            active
            href="/"
            className="nav-buttons bg-transparent text-cyan-700"
          >
            <p>Início</p>
          </Navbar.Link>
          <Navbar.Link
            className="hover:bg-transparent border-none"
            href="/categories"
          >
            <p className="nav-buttons">Categorias</p>
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export default Header;
