import showSearchElem from "@/pages/showSearchElem";

const showSearchHistory = () => {
  let oldSearch = JSON.parse(localStorage.getItem("searchHistory"));
  if (oldSearch) {
    document.getElementById("showResult").append(showSearchElem(oldSearch));
  }
};

export default showSearchHistory;
