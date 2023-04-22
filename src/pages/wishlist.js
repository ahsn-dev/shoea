import El from "@/library/El";
import Router from "@/functions/router";
import filterBrands from "@/components/home/filterBrands";
import wishlistShoe from "@/components/cart/wishlistShoe";
import axiosInstance from "@/api/axiosInstance";

const wishlist = (array) => {
  const container = El({
    element: "div",
    className: "flex flex-wrap",
  });
  array.forEach((element) => {
    axiosInstance.get(`/products/${element}`).then((res) => {
      container.append(wishlistShoe(res.data));
    });
  });
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        className: "flex justify-between items-center p-6",
        child: [
          El({
            element: "div",
            className: "flex justify-center items-center gap-x-4",
            child: [
              El({
                element: "button",
                child: El({
                  element: "ion-icon",
                  name: "arrow-back",
                  className: "text-2xl align-text-top",
                  onclick: () => {
                    Router().navigate("/home");
                  },
                }),
              }),
              El({
                element: "h1",
                child: "My Wishlist",
                className: "text-2xl font-bold",
              }),
            ],
          }),
          El({
            element: "div",
            child: El({
              element: "button",
              child: El({
                element: "ion-icon",
                name: "search-outline",
                className: "text-3xl align-text-top",
              }),
            }),
          }),
        ],
      }),
      filterBrands(),
      container,
    ],
  });
};

export default wishlist;
