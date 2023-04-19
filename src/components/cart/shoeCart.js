import El from "@/library/El";

const shoeCart = (obj, deleteButton, variableItems) => {
  return El({
    element: "div",
    child: El({
      element: "div",
      className: "bg-white w-11/12 flex p-4 rounded-3xl mx-auto mb-4",
      child: [
        El({
          element: "div",
          child: El({
            element: "div",
            className:
              "w-24 h-24 bg-gray-100 rounded-3xl flex justify-center items-center",
            child: El({
              element: "img",
              src: obj.image,
              className: "rounded-3xl",
            }),
          }),
        }),
        El({
          element: "div",
          className: "flex flex-col w-full gap-y-3 ml-4",
          child: [
            El({
              element: "div",
              className: "flex items-center w-full justify-between",
              child: [
                El({
                  element: "h2",
                  child: obj.name,
                }),
                deleteButton,
              ],
            }),
            El({
              element: "div",
              className: "flex items-center gap-x-2",
              child: [
                El({
                  element: "div",
                  child: "",
                  className: `w-4 h-4 rounded-full bg-${obj.color.hex}`,
                }),
                El({
                  element: "span",
                  child: obj.color.name,
                  className: "text-xs text-gray-500",
                }),
                El({
                  element: "span",
                  child: "|",
                  className: "text-xs text-gray-500",
                }),
                El({
                  element: "span",
                  child: obj.size,
                  className: "text-xs text-gray-500",
                }),
              ],
            }),
            El({
              element: "div",
              className: "flex justify-between items-center gap-x-10",
              child: [
                El({
                  element: "span",
                  child: `$${obj.price}`,
                }),
                variableItems,
              ],
            }),
          ],
        }),
      ],
    }),
  });
};

export default shoeCart;
