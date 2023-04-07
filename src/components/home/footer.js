import El from "@/library/El";

const footer = () => {
  const icons = [
    { name: "home-outline", text: "Home" },
    { name: "bag-outline", text: "Cart" },
    { name: "cart-outline", text: "Orders" },
    { name: "wallet-outline", text: "Wallet" },
    { name: "person-outline", text: "Profile" },
  ];

  const footerItems = icons.map((icon) => {
    return El({
      element: "div",
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
    className: "flex gap-x-10 justify-center items-center mb-4 mt-8",
    child: footerItems,
  });
};

// const footer = () => {
//   const icons = [
//     { name: "home-outline", text: "Home" },
//     { name: "bag-outline", text: "Cart" },
//     { name: "cart-outline", text: "Orders" },
//     { name: "wallet-outline", text: "Wallet" },
//     { name: "person-outline", text: "Profile" },
//   ];

//   const removeOutline = (name) => {
//     return name.replace(`${name}-outline`, name);
//   };

//   const onButtonClick = (event) => {
//     const icon = event.target.querySelector("ion-icon");
//     const name = icon.getAttribute("name");
//     const newName = removeOutline(name);
//     icon.setAttribute("name", newName);
//   };

//   const footerItems = icons.map((icon) => {
//     return El({
//       element: "div",
//       className: "flex flex-col",
//       child: [
//         El({
//           element: "button",
//           onClick: onButtonClick,
//           child: El({
//             element: "ion-icon",
//             className: "text-3xl",
//             name: icon.name,
//           }),
//         }),
//         El({
//           element: "span",
//           className: "text-xs",
//           child: icon.text,
//         }),
//       ],
//     });
//   });

//   return El({
//     element: "div",
//     className: "flex gap-x-10 justify-center items-center mb-4 mt-8",
//     child: footerItems,
//   });
// };

export default footer;
