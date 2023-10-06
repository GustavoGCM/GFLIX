import { getGenres } from "@/services/utils";
import SidebarCategories from "../../components/sidebar/sidebarCategories";
import CategoriesView from "@/components/views/categoriesView";

const CategoriesPage = async () => {
  const genres = await getGenres();

  return (
    <>
      <CategoriesView genres={genres} />
    </>
  );
};

export default CategoriesPage;
