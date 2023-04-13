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
    className:
      "w-full fixed bottom-0 py-2 flex gap-x-10 justify-center items-center bg-white",
    child: footerItems,
  });
};

export default footer;
