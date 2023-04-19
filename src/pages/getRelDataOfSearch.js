import showSearchPage from "./showSearchPage";

const getRelDataOfSearch = (e) => {
  const searchItem = e.target.closest("li").innerText;

  showSearchPage(searchItem);
};

export default getRelDataOfSearch;
