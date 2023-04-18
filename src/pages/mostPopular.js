import El from "@/library/El";
import Router from "@/functions/router";
import filterBrands from "@/components/home/filterBrands";

const mostPopular = (array) => {
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        className: "p-4 flex items-center justify-between pt-8 px-6",
        child: [
          El({
            element: "div",
            className: "flex items-center gap-3",
            child: [
              El({
                element: "button",
                className: "flex",
                child: El({
                  element: "ion-icon",
                  name: "arrow-back",
                  className: "text-2xl",
                  onclick: () => {
                    Router().navigate("/home");
                  },
                }),
              }),
              El({
                element: "h1",
                child: "Most Popular",
                className: "text-2xl font-medium",
              }),
            ],
          }),
        ],
      }),
      filterBrands(),
      El({
        element: "div",
        className: "flex flex-wrap",
        child: array,
      }),
    ],
  });
};

export default mostPopular;
