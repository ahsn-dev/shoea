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
              console.log(e.target.closest("button").innerText);
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
          onclick: (e) => {
            // get data of local storage
            console.log(e);
          },
        }),
        El({
          element: "ion-icon",
          name: "close-circle-outline",
          onclick: (e) => {
            // delete search history
            console.log(e);
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
