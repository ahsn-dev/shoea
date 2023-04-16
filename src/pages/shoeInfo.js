import counter from "@/components/cart/counter";
import Router from "@/functions/router";
import El from "@/library/El";

const shoeInfo = () => {
  // add tick to the buttons of color section
  function addTick(button) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn !== button) {
        const ticks = btn.querySelectorAll(".tick");
        ticks.forEach((tick) => tick.remove());
      }
    });

    const svg = El({
      element: "ion-icon",
      name: "checkmark",
      className:
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white tick",
    });

    button.appendChild(svg);
  }

  // change color and bg of buttons in size section
  let activeButton = null;
  function setActiveButton(button) {
    if (activeButton) {
      activeButton.classList.remove("bg-black", "text-white");
      activeButton.classList.add("bg-white", "text-black");
    }
    activeButton = button;
    activeButton.classList.remove("bg-white", "text-black");
    activeButton.classList.add("bg-black", "text-white");
  }

  return El({
    element: "div",
    className:
      "w-screen h-screen flex flex-col bg-white divide-y divide-slate-200",
    child: [
      El({
        element: "button",
        className: "absolute top-6 left-6",
        onclick: () => {
          Router().navigate("/home");
        },
        child: El({
          element: "ion-icon",
          name: "arrow-back",
        }),
      }),
      El({
        element: "div",
        className: "h-1/2 w-full",
        child: [
          El({
            element: "img",
            className: "w-full h-full",
            src: "public/products/adidas/1.webp",
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex flex-col py-4 gap-2",
        child: [
          El({
            element: "div",
            className: "w-full flex justify-between items-center px-6",
            child: [
              El({
                element: "p",
                className: "text-3xl font-medium",
                child: "Running Sportwear",
              }),
              El({
                element: "button",
                className: "flex",
                child: [
                  El({
                    element: "ion-icon",
                    className: "text-2xl",
                    name: "heart-outline",
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex items-center gap-x-3 px-6",
            child: [
              El({
                element: "div",
                className: "bg-gray-100 rounded",
                child: El({
                  element: "span",
                  child: "6,641 sold",
                  className: "text-xs px-2 py-1.5 flex",
                }),
              }),
              El({
                element: "ion-icon",
                name: "star-half",
                className: "text-base",
              }),
              El({
                element: "p",
                className: "font-light text-sm",
                child: "4.3 (5,389 rewiews)",
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full px-6 flex flex-col gap-3 py-4",
        child: [
          El({
            element: "p",
            className: "font-semibold",
            child: ["Description"],
          }),
          El({
            element: "div",
            child: El({
              element: "p",
              className: "font-light",
              child: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
                El({
                  element: "button",
                  className: "font-medium",
                  child: "view more..",
                }),
              ],
            }),
          }),
          //   El({
          //     element: "p",
          //     className: "font-light",
          //     child: [
          //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni excepturi ",
          //       El({
          //         element: "span",
          //         className: "font-medium",
          //         child: "view more..",
          //       }),
          //     ],
          //   }),
          El({
            element: "div",
            className: "w-full flex justify-between",
            child: [
              El({
                element: "div",
                className: "flex flex-col gap-y-2",
                child: [
                  El({
                    element: "p",
                    className: "font-semibold text-base",
                    child: ["Size"],
                  }),
                  El({
                    element: "div",
                    className: "flex gap-2",
                    child: [
                      El({
                        element: "button",
                        className: `border border-black w-8 h-8 rounded-full`,
                        child: 40,
                        onclick: (event) => {
                          setActiveButton(event.target);
                        },
                      }),
                      El({
                        element: "button",
                        className: `border border-black w-8 h-8 rounded-full`,
                        child: 41,
                        onclick: (event) => {
                          setActiveButton(event.target);
                        },
                      }),
                      El({
                        element: "button",
                        className: `border border-black w-8 h-8 rounded-full`,
                        child: 42,
                        onclick: (event) => {
                          setActiveButton(event.target);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex flex-col gap-y-2",
                child: [
                  El({
                    element: "p",
                    className: "font-semibold text-base",
                    child: ["Color"],
                  }),
                  El({
                    element: "div",
                    className: "flex gap-2",
                    child: [
                      El({
                        element: "button",
                        className: `w-8 h-8 rounded-full bg-green-600 relative`,
                        onclick: (event) => {
                          addTick(event.target);
                        },
                      }),
                      El({
                        element: "button",
                        className: `w-8 h-8 rounded-full bg-yellow-400 relative`,
                        onclick: (event) => {
                          addTick(event.target);
                        },
                      }),
                      El({
                        element: "button",
                        className: `w-8 h-8 rounded-full bg-red-600 relative`,
                        onclick: (event) => {
                          addTick(event.target);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: "div",
            className: "flex gap-x-4 items-center mt-2",
            child: [
              El({
                element: "p",
                className: "font-semibold text-sm",
                child: ["Quantity"],
              }),
              counter("w-10", "h-10", "text-xl"),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "w-full flex justify-between",
        child: [
          El({
            element: "div",
            className:
              "w-full flex justify-center items-center gap-x-4 px-5 py-2.5 mt-8",
            child: [
              El({
                element: "div",
                className: "flex flex-col gap-y-1 w-1/4",
                child: [
                  El({
                    element: "span",
                    child: "Total price",
                    className: "font-light text-xs text-slate-400",
                  }),
                  El({
                    element: "span",
                    id: "totalPriceSpan",
                    child: "$0",
                    className: "font-bold text-lg",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "w-full flex justify-center items-center",
                child: El({
                  element: "button",
                  className:
                    "bg-black w-full py-3 text-white flex justify-center items-center rounded-full gap-x-4 shadow shadow-gray-400",
                  child: [
                    El({
                      element: "ion-icon",
                      name: "bag-handle",
                      className: "text-white",
                    }),
                    "Add to Cart",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};

export default shoeInfo;
