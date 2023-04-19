import axiosInstance from "@/api/axiosInstance";
import shoeCart from "@/components/cart/shoeCart";
import footer from "@/components/home/footer";
import El from "@/library/El";
import "flowbite";

const myOrders = (id) => {
  const activeContainer = El({
    element: "div",
  });
  const completedContainer = El({
    element: "div",
  });

  axiosInstance.get(`/orders?userId=${id}`).then((res) => {
    res.data.forEach((element) => {
      if (element.isActive) {
        activeContainer.append(shoeCart(element));
      } else {
        completedContainer.append(shoeCart(element));
      }
    });
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
                    child: "My Orders",
                    className: "text-2xl font-semibold",
                  }),
                ],
              }),
              El({
                element: "div",
                className: "flex items-center gap-x-4",
                child: [
                  El({
                    element: "button",
                    className: "flex",
                    child: El({
                      element: "ion-icon",
                      name: "search-outline",
                      className: "text-3xl align-text-top",
                    }),
                  }),
                  El({
                    element: "button",
                    className: "flex",
                    child: El({
                      element: "ion-icon",
                      name: "ellipsis-horizontal-circle",
                      className: "text-2xl",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      El({
        element: "div",
        className: "mb-4 border-b border-gray-200 dark:border-gray-700",
        child: El({
          element: "ul",
          className:
            "w-full flex justify-evenly -mb-px text-sm font-medium text-center",
          id: "myTab",
          dataTabsToggle: "#myTabContent",
          role: "tablist",
          child: [
            El({
              element: "li",
              className: "",
              role: "presentation",
              child: El({
                element: "button",
                className: "inline-block p-4 border-b-2 rounded-t-lg",
                id: "profile-tab",
                dataTabsTarget: "#profile",
                type: "button",
                role: "tab",
                ariaControls: "profile",
                ariaSelected: "false",
                child: "Profile",
              }),
            }),
            El({
              element: "li",
              className: "",
              role: "presentation",
              child: El({
                element: "button",
                className: "inline-block p-4 border-b-2 rounded-t-lg",
                id: "dashboard-tab",
                dataTabsTarget: "#dashboard",
                type: "button",
                role: "tab",
                ariaControls: "dashboard",
                ariaSelected: "false",
                child: "Dashboard",
              }),
            }),
          ],
        }),
      }),
      El({
        element: "div",
        id: "myTabContent",
        child: [
          El({
            element: "div",
            className: "hidden p-4 rounded-lg bg-gray-50",
            id: "profile",
            role: "tabpanel",
            ariaLabelledby: "profile-tab",
            child: activeContainer,
          }),
          El({
            element: "div",
            className: "hidden p-4 rounded-lg bg-gray-50",
            id: "dashboard",
            role: "tabpanel",
            ariaLabelledby: "dashboard-tab",
            child: completedContainer,
          }),
        ],
      }),
      footer(),
    ],
  });
};

export default myOrders;
