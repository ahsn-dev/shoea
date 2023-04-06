import El from "@/library/El";
// core version + navigation, pagination modules:
import Swiper from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const FirstWelcomePage = () => {
//   return El({
//     element: "div",
//     className: "h-screen",
//     child: [
//       El({
//         element: "div",
//         child: El({
//           element: "img",
//           src: "./public/assets/images/welcome-1.png",
//           className:
//             "h-3/6 w-full object-cover sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto",
//         }),
//       }),
//       El({
//         element: "div",
//         className: "flex flex-col items-center",
//         child: [
//           El({
//             element: "h1",
//             child: "We provide high quality products just for you",
//             className: "text-center font-medium text-3xl my-4 mb-20",
//           }),
//           El({
//             element: "img",
//             src: "./public/assets/images/carousel-1.png",
//             className: "mx-auto mb-12",
//           }),
//           El({
//             element: "button",
//             child: "Next",
//             className: "w-[90%] mb-4 py-2 bg-black text-white rounded-full",
//           }),
//         ],
//       }),
//     ],
//   });
// };

const FirstWelcomePage = () => {
  return El({
    element: "div",
    className: "swiper",
    child: [
      El({
        element: "div",
        className: "swiper-wrapper",
        child: [
          El({
            element: "div",
            className: "swiper-slide",
            child: "text1",
          }),
          El({
            element: "div",
            className: "swiper-slide",
            child: "text2",
          }),
          El({
            element: "div",
            className: "swiper-slide",
            child: "text3",
          }),
        ],
      }),
      El({
        element: "div",
        className: "swiper-pagination",
      }),
    ],
  });
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log(swiper);

export default FirstWelcomePage;
