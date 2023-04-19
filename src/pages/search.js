import El from "@/library/El";
import footer from "@/components/home/footer";

const search = () => {
  return El({
    element: "div",
    child: [
      El({
        element: "div",
        className: "relative p-6",
        child: [
          // El({
          //   element: "input",
          //   onkeyup: (e) => {
          //     searchKeyUp(e);
          //   },
          //   onfocus: () => {
          //     searchFocus();
          //   },
          //   type: "text",
          //   placeholder: "Search",
          //   id: "searchInput",
          //   className:
          //     "py-3 w-full pl-10 bg-gray-100 placeholder:text-slate-400 text-slate-800 rounded-xl border-none focus:ring-black",
          // }),
          El({
            element: "ion-icon",
            name: "search",
            className:
              "absolute top-[38px] align-top left-9 text-xl text-gray-400",
          }),
          El({
            element: "ion-icon",
            name: "options",
            className:
              "absolute top-[38px] align-top right-9 text-xl text-gray-400",
          }),
        ],
      }),
      El({
        element: "div",
        child: "",
        id: "showResult",
      }),
      footer(),
    ],
  });
};

export default search;
