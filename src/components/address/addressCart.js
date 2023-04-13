import El from "@/library/El";

const addressCart = (
  addressName,
  defaultSpan,
  variableItem,
  addressLogo = "location",
  price = ""
) => {
  return El({
    element: "div",
    className:
      "flex items-center justify-between text-left p-4 rounded-3xl bg-white mx-4 mb-4",
    child: [
      El({
        element: "div",
        className: "flex justify-center items-center gap-3",
        child: [
          El({
            element: "div",
            className:
              "relative rounded-full bg-gray-200 w-16 h-16 text-center",
            child: [
              El({
                element: "div",
                className:
                  "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-full w-10 h-10 text-center",
                child: [
                  El({
                    element: "ion-icon",
                    name: addressLogo,
                    className:
                      "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-10 text-xl",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex flex-col gap-y-1",
            child: [
              El({
                element: "div",
                className: "flex gap-x-2",
                child: [
                  El({
                    element: "p",
                    child: addressName,
                    className: "font-bold text-md",
                  }),
                  defaultSpan,
                ],
              }),
              El({
                element: "p",
                child: "61480 Sunbrook",
                className: "text-gray-600",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        child: El({
          element: "span",
          child: price,
          className: "font-bold text-lg",
        }),
      }),
      variableItem,
    ],
  });
};

export default addressCart;
