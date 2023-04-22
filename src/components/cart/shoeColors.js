import El from "@/library/El";

const shoeColors = (color) => {
  return El({
    element: "div",
    id: color,
    className:
      "color border-2 cursor-pointer border-transparent rounded-full p-4 relative" +
      " " +
      color,
  });
};

export default shoeColors;
