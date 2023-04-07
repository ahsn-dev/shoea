import El from "@/library/El";

const welcome = () => {
  return El({
    element: "div",
    child: El({
      element: "img",
      src: "./public/assets/images/welcome-page.png",
      className: "w-full h-screen ",
    }),
  });
};
export default welcome;