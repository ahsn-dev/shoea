// import El from "@/library/El";
import showSearchResult from "./showSearchResult";

const searchKeyUp = (e) => {
  if (e.key === "Enter") {
    let searchLocalStorage = JSON.parse(localStorage.getItem("search"));
    if (searchLocalStorage) {
      searchLocalStorage.push(e.target.value);
      searchLocalStorage = [...new Set(searchLocalStorage)];
      localStorage.setItem("search", JSON.stringify(searchLocalStorage));

      const searchInput = document.getElementById("searchInput");
      const showResult = document.getElementById("showResult");
      showResult.innerHTML = "";
      showResult.append(showSearchResult(searchLocalStorage));
      searchInput.value = "";
    } else {
      let myArray = [];
      myArray.push(e.target.value);
      localStorage.setItem("search", JSON.stringify(myArray));

      const showResult = document.getElementById("showResult");
      showResult.append(showSearchResult(myArray));

      const searchInput = document.getElementById("searchInput");
      searchInput.value = "";
    }
  }
};

export default searchKeyUp;
