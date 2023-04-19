import El from "@/library/El";

const PageNotFound = (msg, title) => {
  return El({
    element: "div",
    child: [
      El({
        element: "img",
        src: "http://localhost:5180/public/svg/pageNotFound.svg",
      }),
      El({
        element: "h1",
        child: title,
        className: "font-bold text-[40px]",
      }),
      El({
        element: "div",
        child: msg,
        className: "text-[30px]",
      }),
    ],
  });
};

export default PageNotFound;
