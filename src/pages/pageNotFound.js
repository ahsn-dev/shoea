import El from "@/library/El";
// import { Routes } from "@/routes";
// import Router from "@/functions/router";

const PageNotFound = (msg, title) => {
  return El({
    element: "div",
    // onclick: login
    //   ? () => {
    //       Routes().navigate("/login");
    //     }
    //   : () => {},
    // className: `absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2 text-center ${
    //   login ? "hover:text-[#144272]" : ""
    // }`,
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
