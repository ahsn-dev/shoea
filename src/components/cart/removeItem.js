import El from "@/library/El";

const removeItem = () => {
  return El({
    element: "button",
    data: {
      name: "action",
      value: "delete",
    },
    className: "flex items-center",
    child: El({
      element: "ion-icon",
      data: {
        name: "action",
        value: "delete",
      },
      name: "trash-outline",
    }),
  });
};

export default removeItem;
