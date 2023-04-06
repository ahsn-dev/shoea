import El from "@/library/El";

const ThirdWelcomePage = () => {
  return El({
    element: "div",
    className: "h-screen",
    child: [
      El({
        element: "div",
        child: El({
          element: "img",
          src: "./public/assets/images/welcome-3.png",
          className:
            "h-3/6 w-full object-cover sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto",
        }),
      }),
      El({
        element: "div",
        className: "flex flex-col items-center",
        child: [
          El({
            element: "h1",
            child: "We provide high quality products just for you",
            className: "text-center font-medium text-3xl my-4 mb-20",
          }),
          El({
            element: "img",
            src: "./public/assets/images/carousel-3.png",
            className: "mx-auto mb-12",
          }),
          El({
            element: "button",
            child: "Get Started",
            className: "w-[90%] mb-4 py-2 bg-black text-white rounded-full",
          }),
        ],
      }),
    ],
  });
};

export default ThirdWelcomePage;
