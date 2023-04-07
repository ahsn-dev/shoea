import El from "@/library/El";

const brands = [
  "nike",
  "adidas",
  "puma",
  "asics",
  "reebok",
  "new Ba..",
  "converse",
  "more..",
];

const brandsCategory = () => {
  return El({
    element: "div",
    className:
      "px-4 pb-7 flex flex-wrap justify-center items-center gap-x-5 gap-y-8",
    child: brands.map((brand) =>
      El({
        element: "div",
        className: "flex flex-col items-center",
        child: [
          El({
            element: "button",
            className:
              "w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center mb-4",
            child: El({
              element: "img",
              src: `./public/assets/images/brand-logos/${brand}.png`,
            }),
          }),
          El({
            element: "span",
            child: brand.charAt(0).toUpperCase() + brand.slice(1),
          }),
        ],
      })
    ),
  });
};

export default brandsCategory;
