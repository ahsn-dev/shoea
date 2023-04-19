import Router from "@/functions/router";
import El from "@/library/El";

const footer = () => {
  const icons = [
    { name: "home-outline", secondName: "home", text: "Home", route: "/home" },
    { name: "bag-outline", secondName: "bag", text: "Cart", route: "/myCart" },
    {
      name: "cart-outline",
      secondName: "cart",
      text: "Orders",
      route: "/myOrders",
    },
    {
      name: "wallet-outline",
      secondName: "wallet",
      text: "Wallet",
      route: "/checkout",
    },
    {
      name: "person-outline",
      secondName: "person",
      text: "Profile",
      route: "/home",
    },
  ];

  const footerItems = icons.map((icon) => {
    return El({
      element: "div",
      onclick: () => {
        const name = icon.name;
        const secondName = icon.secondName;
        const iconEl = document.querySelector(`ion-icon[name="${icon.name}"]`);
        // console.log(iconEl);
        if (iconEl) {
          iconEl.setAttribute(
            "name",
            name === iconEl.getAttribute("name") ? secondName : name
          );
        }
        Router().navigate(`${icon.route}`);
      },
      className: "flex flex-col",
      child: [
        El({
          element: "button",
          child: El({
            element: "ion-icon",
            className: "text-3xl",
            name: icon.name,
          }),
        }),
        El({
          element: "span",
          className: "text-xs",
          child: icon.text,
        }),
      ],
    });
  });

  return El({
    element: "div",
    className:
      "w-full fixed bottom-0 py-2 flex gap-x-10 justify-center items-center bg-white",
    child: footerItems,
  });
};

export default footer;

// import El from "@/library/El";
// import { svgs } from "@/svg";
// import Router from "@/functions/router";

// const icons = {
//   home: svgs.HomeFill,
//   myCart: svgs.CartFill,
//   myOrders: svgs.OrderFill,
//   checkout: svgs.WalletFill,
//   search: svgs.UserFill,
// };

// export const renderNavbar = () => {
//   const nav =
//     document.getElementById("nav-bar") ||
//     El({
//       element: "div",
//       className: "fixed bottom-0 w-full h-16",
//     });
//   nav.classList.add(
//     "flex",
//     "items-center",
//     "justify-between",
//     "px-8",
//     "border-t",
//     "shadow"
//   );
//   nav.innerHTML = "";
//   nav.append(
//     El({
//       element: "div",
//       className: "flex flex-col items-center justify-center gap-1",
//       eventListener: [
//         {
//           event: "click",
//           callback: () => {
//             Router().navigate("/home");
//           },
//         },
//       ],
//       child: [
//         El({
//           element: "span",
//           id: "home",
//           className: "[&_path]:fill-btn",
//           innerHTML: svgs.Home,
//         }),
//         El({
//           element: "span",
//           className: "text-shoea font-semibold text-[10px]",
//           innerText: "Home",
//         }),
//       ],
//     }),
//     El({
//       element: "div",
//       className: "flex flex-col items-center justify-center gap-1",
//       eventListener: [
//         {
//           event: "click",
//           callback: () => {
//             Router().navigate("/myCart");
//           },
//         },
//       ],
//       child: [
//         El({
//           element: "span",
//           id: "myCart",
//           className: "[&_path]:fill-btn",
//           innerHTML: svgs.Cart,
//         }),
//         El({
//           element: "span",
//           className: "text-shoea font-semibold text-[10px]",
//           innerText: "Cart",
//         }),
//       ],
//     }),
//     El({
//       element: "div",
//       className: "flex flex-col items-center justify-center gap-1",
//       eventListener: [
//         {
//           event: "click",
//           callback: () => {
//             Router().navigate("/myOrders");
//           },
//         },
//       ],
//       child: [
//         El({
//           element: "span",
//           id: "myOrders",
//           className: "[&_path]:fill-btn",
//           innerHTML: svgs.Order,
//         }),
//         El({
//           element: "span",
//           className: "text-shoea font-semibold text-[10px]",
//           innerText: "Orders",
//         }),
//       ],
//     }),
//     El({
//       element: "div",
//       className: "flex flex-col items-center justify-center gap-1",
//       eventListener: [
//         {
//           event: "click",
//           callback: () => {
//             Router().navigate("/checkout");
//           },
//         },
//       ],
//       child: [
//         El({
//           element: "span",
//           id: "checkout",
//           className: "[&_path]:fill-btn",
//           innerHTML: svgs.Wallet,
//         }),
//         El({
//           element: "span",
//           className: "text-shoea font-semibold text-[10px]",
//           innerText: "Wallet",
//         }),
//       ],
//     }),
//     El({
//       element: "div",
//       className: "flex flex-col items-center justify-center gap-1",
//       eventListener: [
//         {
//           event: "click",
//           callback: () => {
//             Router().navigate("/search");
//           },
//         },
//       ],
//       child: [
//         El({
//           element: "span",
//           id: "search",
//           className: "[&_path]:fill-btn",
//           innerHTML: svgs.User,
//         }),
//         El({
//           element: "span",
//           className: "text-shoea font-semibold text-[10px]",
//           innerText: "Profile",
//         }),
//       ],
//     })
//   );
//   return nav;
// };

// const footer = (target) => {
//   setTimeout(() => {
//     const icon = document.getElementById(target);
//     icon.innerHTML = icons[target];
//   }, 0);

//   return El({
//     element: "div",
//     id: "nav-bar",
//     className: "fixed bottom-0 w-full h-16 bg-white",
//     child: [renderNavbar()],
//   });
// };

// export default footer;
