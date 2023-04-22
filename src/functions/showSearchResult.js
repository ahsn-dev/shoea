import El from "@/library/El";

const showSearchResult = (array) => {
  return El({
    element: "div",
    id: "showSearchResult",
    className: "flex flex-col w-full bg-white p-4",
    child: [
      El({
        element: "div",
        className: "flex items-center justify-between p-2",
        child: [
          El({
            element: "span",
            child: "Recent",
          }),
          El({
            element: "button",
            child: "Clear All",
            onclick: (e) => {
              e.target.closest("button").innerText;
            },
          }),
        ],
      }),
      El({
        element: "ul",
        child: [...listMaker(array)],
      }),
    ],
  });
};

const listMaker = (array) => {
  const listItems = array.map((item) => {
    return El({
      element: "li",
      className: "flex items-center justify-between cursor-pointer",
      child: [
        El({
          element: "p",
          className: "flex-1",
          child: item,
          onclick: () => {
            // get data of local storage
          },
        }),
        El({
          element: "ion-icon",
          name: "close-circle-outline",
          onclick: () => {
            // delete search history
          },
        }),
      ],
    });
  });

  return listItems;
};

window.addEventListener("click", (e) => {
  const searchElement = document.getElementById("showResult");
  if (
    searchElement &&
    e.target.id !== "showResult" &&
    e.target.id !== "searchInput"
  ) {
    searchElement.innerHTML = "";
  }
});

export default showSearchResult;
