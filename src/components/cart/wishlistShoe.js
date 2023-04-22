import El from "@/library/El";
import Router from "@/functions/router";

const wishlistShoe = (obj) => {
  return El({
    element: "div",
    id: obj.id,
    onclick: () => {
      Router().navigate(`/products/${obj.id}`);
    },
    className: "flex flex-wrap w-1/2 px-2",
    child: El({
      element: "div",
      className: "flex flex-wrap",
      child: El({
        element: "div",
        className: "mb-6 flex flex-col items-center",
        child: [
          El({
            element: "div",
            className:
              "w-40 h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-3 relative z-10",
            child: [
              El({
                element: "img",
                src: obj.images[0],
              }),
              El({
                element: "div",
                className:
                  "bg-black rounded-full z-20 flex p-1 absolute top-4 right-4",
                child: El({
                  element: "ion-icon",
                  name: "heart",
                  className: "text-lg text-white",
                }),
              }),
            ],
          }),
          El({
            element: "p",
            child: obj.title,
            className: "font-bold text-lg mb-1 pl-4",
          }),
          El({
            element: "div",
            className: "flex self-start gap-x-2 mb-1 pl-4",
            child: [
              El({
                element: "ion-icon",
                name: "star-half",
                className: "text-base",
              }),
              El({
                element: "span",
                child: "4.6",
                className: "text-gray-400 text-base",
              }),
              El({
                element: "span",
                child: "|",
                className: "text-gray-400",
              }),
              El({
                element: "div",
                className: "bg-gray-100 py-[2px] px-[6px] rounded",
                child: El({
                  element: "span",
                  child: "6,641 sold",
                  className: "text-sm",
                }),
              }),
            ],
          }),
          El({
            element: "span",
            child: `$${obj.price}`,
            className: "font-medium text-base self-start pl-4",
          }),
        ],
      }),
    }),
  });
};

export default wishlistShoe;
