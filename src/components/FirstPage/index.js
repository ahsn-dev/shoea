import El from "@/library/El";

const FirstPage = () => {
  return El({
    element: "div",
    className: "bg-white flex justify-center align-center mt-64",
    child: El({
      element: "img",
      src: "./public/assets/images/shoea-logo.png",
    }),
  });
};

export default FirstPage;
