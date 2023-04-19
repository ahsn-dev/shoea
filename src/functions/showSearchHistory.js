import showSearchElem from "@/pages/showSearchElem";

// import Router from "./router"

const showSearchHistory = () => {
  let oldSearch = JSON.parse(localStorage.getItem("searchHistory"));

  // console.log(oldSearch)

  if (oldSearch) {
    document.getElementById("showResult").append(showSearchElem(oldSearch));
  }
};

export default showSearchHistory;
