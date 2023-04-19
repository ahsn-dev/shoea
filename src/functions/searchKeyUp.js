// import El from "@/library/El";
import showSearchResult from "./showSearchResult";

const searchKeyUp = (e) => {
  if (e.key === "Enter") {
    const searchLocalStorage = JSON.parse(localStorage.getItem("search"));
    if (searchLocalStorage) {
      searchLocalStorage.push(e.target.value);
      localStorage.setItem("search", JSON.stringify(searchLocalStorage));

      const showResult = document.getElementById("showResult");
      showResult.append(showSearchResult(searchLocalStorage));
    } else {
      let myArray = [];
      myArray.push(e.target.value);
      localStorage.setItem("search", JSON.stringify(myArray));

      const showResult = document.getElementById("showResult");
      showResult.append(showSearchResult(myArray[0]));
    }
  }
};

export default searchKeyUp;
