import El from "@/library/El";
import homeNavbar from "@/components/home/navbar";
import homeSearch from "@/components/home/searchBar";
import brandsCategory from "@/components/home/brandsCategory";
import filterBrands from "@/components/home/filterBrands";
import shoe from "@/components/cart/shoe";
import footer from "@/components/home/footer";
import axiosInstance from "@/api/axiosInstance";
import Router from "@/functions/router";

const home = () => {
  const cards = El({
    element: "div",
    id: "homeCards",
    className: "flex flex-wrap justify-center items-center p-4 pb-10",
  });
  axiosInstance.get("/products").then((res) => {
    cards.append(
      ...res.data.map((item) => {
        return shoe(item);
      })
    );
  });
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
            element: "button",
            child: "See All",
            className: "text-gray-500 text-sm",
            onclick: () => {
              Router().navigate("/mostPopular");
            },
          }),
        ],
      }),
      filterBrands(),
      cards,
      footer(),
    ],
  });

  return app;
};

export default home;
