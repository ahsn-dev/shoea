import showSearchResult from "./showSearchResult";

const searchFocus = () => {
  const searchLocalStorage = JSON.parse(localStorage.getItem("search"));
  if (searchLocalStorage) {
    const showResult = document.getElementById("showResult");
    showResult.append(showSearchResult(searchLocalStorage));
  }
};

export default searchFocus;
