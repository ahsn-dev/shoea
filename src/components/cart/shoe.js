import El from "@/library/El";

const shoe = () => {
  const items = [
    {
      imgSrc: "/assets/images/shoe.png",
      title: "K-Swiss ista Train...",
      price: "$ 85.00",
    },
    // {
    //   imgSrc: "/assets/images/shoe2.png",
    //   title: "K-Swiss ista Train...",
    //   price: "$ 85.00",
    // },
    // {
    //   imgSrc: "/assets/images/shoe.png",
    //   title: "K-Swiss ista Train...",
    //   price: "$ 85.00",
    // },
    // {
    //   imgSrc: "/assets/images/shoe2.png",
    //   title: "K-Swiss ista Train...",
    //   price: "$ 85.00",
    // },
    // {
    //   imgSrc: "/assets/images/shoe.png",
    //   title: "K-Swiss ista Train...",
    //   price: "$ 85.00",
    // },
    // {
    //   imgSrc: "/assets/images/shoe2.png",
    //   title: "K-Swiss ista Train...",
    //   price: "$ 85.00",
    // },
  ];

  return El({
    element: "div",
    className: "flex flex-wrap justify-around items-center pl-2",
    child: items.map((item) => {
      return El({
        element: "div",
        className: "mb-6",
        child: [
          El({
            element: "div",
            className:
              "w-40 h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-3",
            child: El({
              element: "img",
              src: item.imgSrc,
            }),
          }),
          El({
            element: "p",
            child: item.title,
            className: "font-bold text-lg mb-1",
          }),
          El({
            element: "span",
            child: item.price,
            className: "font-medium text-base",
          }),
        ],
      });
    }),
  });
};

export default shoe;
