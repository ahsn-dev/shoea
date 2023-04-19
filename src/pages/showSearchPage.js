import axiosInstance from "@/api/axiosInstance";
import shoe from "@/components/cart/shoe";

import Router from "@/functions/router";


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const showSearchPage = (txt) => {
  let text = capitalizeFirstLetter(txt)
  console.log(text)
  axiosInstance.get(`/products?brand=${text}`).then((res) => {
    let cartsArr = res.data
    console.log(cartsArr)
    let cartsElement = cartsArr.map((item) => {
      return shoe(item);
    })



    if (cartsElement.length) {
      Router().navigate(`/home/search/${text}`);
    } else {
      Router().navigate("/search/pageNotFound");
    }

    // carts.forEach((cart) => {

    // document.getElementById('cartDynamicHomeContainer').append(cart)

    // })
  });
};

export default showSearchPage;
