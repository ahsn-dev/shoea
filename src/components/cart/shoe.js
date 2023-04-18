import Router from "@/functions/router";
import El from "@/library/El";

const shoe = (obj) => {
  return El({
    element: "div",
    id: obj.id,
    onclick: () => {
      Router().navigate(`/products/${obj.id}`);
    },
    className: "flex flex-wrap w-1/2 px-2",
    child: El({
      element: "div",
      className: "mb-6 w-full flex flex-col",
      child: [
        El({
          element: "div",
          className:
            "w-full h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-4",
          child: El({
            element: "img",
            className: "w-full h-full max-h-full rounded-3xl",
            src: obj.images[0],
          }),
        }),
        El({
          element: "p",
          child: obj.title,
          className:
            "w-[80%] text-shoea text-lg font-bold whitespace-nowrap truncate",
        }),
        El({
          element: "span",
          child: `$${obj.price}`,
          className: "font-medium text-base",
        }),
      ],
    }),
  });
};

export default shoe;
