import axiosInstance from "@/api/axiosInstance";
import shoe from "@/components/cart/shoe";
import Router from "@/functions/router";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const showSearchPage = (txt) => {
  let text = capitalizeFirstLetter(txt);
  axiosInstance.get(`/products?brand=${text}`).then((res) => {
    let cartsArr = res.data;
    let cartsElement = cartsArr.map((item) => {
      return shoe(item);
    });
    if (cartsElement.length) {
      Router().navigate(`/home/search/${text}`);
    } else {
      Router().navigate("/search/pageNotFound");
    }
  });
};

export default showSearchPage;
