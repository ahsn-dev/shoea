import axiosInstance from "@/api/axiosInstance";
import shoe from "@/components/cart/shoe";
import Router from "./router";

const searchPage = (text) => {
  axiosInstance.get(`/products?brand=${text}`).then((res) => {
    const shoesArray = res.data;
    const shoeArrayResult = shoesArray.map((item) => {
      return shoe(item);
    });
    if (shoeArrayResult.length) {
      Router().navigate(`/search/${text}`);
    } else {
      Router().navigate("/search/pageNotFound");
    }
  });
};

export default searchPage;
