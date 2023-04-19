import removeItem from "@/components/cart/removeItem";
import shoeCart from "@/components/cart/shoeCart";
import counter from "@/components/cart/counter";
import footer from "@/components/home/footer";
import El from "@/library/El";
import axiosInstance from "@/api/axiosInstance";
import Router from "@/functions/router";

const myCart = (id) => {
  const container = El({
    element: "div",
    onclick: (e) => {
      if (e.target.dataset.action === "delete") {
        document.getElementById("drawer").classList.remove("h-[0px]");
        document.getElementById("drawer").classList.add("h-[300px]");
      }
    },
  });

  axiosInstance.get(`/orders?userId=${id}`).then((res) => {
    res.data.forEach((element) => {
      container.append(
        shoeCart(
          element,
          removeItem(),
          counter({
            totalPriceId: "totalPriceCart",
            price: 245,
            firstNumber: 1,
          })
        )
      );
    });
  });

  const cart = El({
    element: "div",
    className: "bg-white h-screen px-5 py-10",
    child: [
      // drawer
      El({
        element: "div",
        id: "drawer",
        onclick: (e) => {
          console.log(e.currentTarget.childNodes[0].id);
          document
            .getElementById("cardsContainer")
            .childNodes.forEach((item) => {
              if (item.id === e.currentTarget.childNodes[0].id) {
                axiosInstance.get(`/orders/${item.id}`).then((res) => {
                  console.log(res.data);
                  item.querySelector("#quantityNumber").textContent =
                    res.data.quantity;
                });
              }
            });
        },
        child: [
          El({
            element: "div",
            className: "font-bold text-2xl text-center py-5",
            child: "Remove From Cart?",
          }),
          El({
            element: "div",
            className: "border-t border-b py-10 grow",
            id: "drawerCard",
          }),
          El({ element: "div" }),
        ],
        className:
          "flex flex-col justify-center justify-between w-full h-[0px] py-5 px-6 duration-300 absolute bottom-0 left-0 z-30 bg-white rounded-t-[70px] hidden",
      }),
      // drawer background
      El({
        element: "div",
        id: "background",
        onclick: () => {
          document.getElementById("background").classList.add("hidden");
          document.getElementById("drawer").classList.remove("h-[50vh]");
          document.getElementById("drawer").classList.add("h-[0px]");
          setTimeout(() => {
            document.getElementById("drawerCard").innerHTML = "";
            document.getElementById("drawer").classList.add("hidden");
          }, 100);
        },
        className:
          "h-screen w-screen bg-black bg-opacity-20 absolute top-0 left-0 z-20 hidden",
      }),
    ],
  });

  return El({
    element: "div",
    className: "bg-gray-100 w-full h-screen",
    child: [
      El({
        element: "div",
        className: "flex justify-between items-center p-6",
        child: [
          El({
            element: "div",
            className: "flex justify-between items-center w-full",
            child: [
              El({
                element: "div",
                className: "flex justify-center items-center gap-x-5",
                child: [
                  El({
                    element: "img",
                    src: "http://localhost:5180/assets/images/logo.png",
                    className: "w-4 h-4",
                  }),
                  El({
                    element: "h1",
                    child: "My Cart",
                    className: "text-2xl font-semibold",
                  }),
                ],
              }),
              El({
                element: "div",
                child: El({
                  element: "button",
                  className: "flex",
                  child: El({
                    element: "ion-icon",
                    name: "search-outline",
                    className: "text-3xl align-text-top",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      container,
      cart,
      El({
        element: "div",
        className:
          "fixed bottom-16 w-full flex justify-center items-center pl-4 py-4 bg-white rounded-tl-2xl rounded-tr-2xl",
        child: [
          El({
            element: "div",
            className: "flex flex-col gap-y-1",
            child: [
              El({
                element: "span",
                child: "Total price",
                className: "font-light text-xs text-slate-400",
              }),
              El({
                element: "span",
                id: "totalPriceCart",
                // child: container.childNodes..reduce((acc, item) => {
                //   return item + acc;
                // }),
                child: "$508.00",
                className: "font-bold text-lg",
              }),
            ],
          }),
          El({
            element: "div",
            className: "w-full flex justify-center items-center",
            child: El({
              element: "button",
              onclick: () => {
                Router().navigate("/checkout");
              },
              className:
                "bg-black w-4/5 py-3 text-white flex justify-center items-center rounded-full gap-x-4 shadow-2xl shadow-gray-400",
              child: [
                "Checkout",
                El({
                  element: "ion-icon",
                  name: "arrow-forward-circle",
                  className: "text-xs",
                }),
              ],
            }),
          }),
        ],
      }),
      El({
        element: "div",
        child: footer(),
      }),
    ],
  });
};

export default myCart;
