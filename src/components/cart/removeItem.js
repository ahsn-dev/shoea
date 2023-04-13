import El from "@/library/El";

const removeItem = () => {
  return El({
    element: "button",
    className: "flex items-center",
    child: El({
      element: "ion-icon",
      name: "trash-outline",
    }),
  });
};

export default removeItem;
