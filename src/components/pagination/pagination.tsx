import { mdbContext } from "@/providers/MoviesContext/mdbContext";
import { Flowbite, Pagination } from "flowbite-react";
import { useContext } from "react";

interface PaginationProps {
  totalPages: number;
}

const PaginationBar = ({ totalPages }: PaginationProps) => {
  const { page, pageChange } = useContext(mdbContext);

  return (
    <Flowbite
      theme={{
        theme: {
          pagination: {
            pages: {
              previous: {
                base: "ml-0 rounded-l-lg border border-gray-300 bg-gray-800 py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-400",
              },
              next: {
                base: "rounded-r-lg border border-gray-300 bg-gray-800 py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-400",
              },
              selector: {
                base: "w-12 border border-gray-300 bg-gray-800 py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-400 ",
                active:
                  "bg-cyan-700 text-white hover:bg-cyan-600 hover:text-cyan-700",
              },
            },
          },
        },
      }}
    >
      <Pagination
        className="hidden md:block"
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => pageChange(page)}
      ></Pagination>
      <Pagination
        className="block md:hidden"
        layout="navigation"
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(page) => pageChange(page)}
      ></Pagination>
    </Flowbite>
  );
};

export default PaginationBar;
