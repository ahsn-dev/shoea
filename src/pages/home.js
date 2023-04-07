import El from "@/library/El";
import homeNavbar from "@/components/home/navbar";
import homeSearch from "@/components/home/search";
import brandsCategory from "@/components/home/brandsCategory";
import filterBrands from "@/components/home/filterBrands";
import shoe from "@/components/cart/shoe";
import footer from "@/components/home/footer";

const home = () => {
  const app = El({
    element: "div",
    child: [
      homeNavbar(),
      homeSearch(),
      brandsCategory(),
      El({
        element: "div",
        className: "flex justify-between items-center px-6",
        child: [
          El({
            element: "h2",
            child: "Most Popular",
            className: "font-medium text-lg text-black",
          }),
          El({
            element: "a",
            href: "",
            child: "See All",
            className: "text-gray-500 text-sm",
          }),
        ],
      }),
      filterBrands(),
      shoe(),
      footer(),
    ],
  });

  return app;
};

export default home;
