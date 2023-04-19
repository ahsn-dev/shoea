import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import slider from "@/pages/slider";
import login from "@/pages/login";
import home from "@/pages/home";
import shoeInfo from "@/pages/shoeInfo";
import axiosInstance from "../api/axiosInstance";
import singleProduct from "@/pages/singleProduct";
import shoe from "@/components/cart/shoe";
import myCart from "@/pages/myCart";
import wishlist from "@/pages/wishlist";
import mostPopular from "@/pages/mostPopular";
import checkout from "@/pages/checkout";
import shippingAddress from "@/pages/shippingAddress";
import shippingType from "@/pages/shippingType";
import paymentMethod from "@/pages/paymentMethod";
import paymentModal from "@/components/payment/paymentModal";
import search from "@/pages/search";
import myOrders from "@/pages/myOrders";
import PageNotFound from "@/pages/pageNotFound";
// import PageNotFound from "@/pages/pageNotFound";

const route = new Navigo("/");

const Router = () => {
  const root = document.getElementById("root");
  route
    .on("/", () => {
      root.append(starter());
    })
    .on("/welcome", () => {
      root.innerHTML = "";
      root.append(welcome());
    })
    .on("/slider", () => {
      root.innerHTML = "";
      root.append(slider());
    })
    .on("/login", () => {
      root.innerHTML = "";
      root.append(login());
    })
    .on("/home", () => {
      root.innerHTML = "";
      root.append(home());
    })
    .on("/search", () => {
      root.innerHTML = "";
      root.append(search());
    })
    .on("/myOrders", () => {
      root.innerHTML = "";
      root.append(myOrders(1));
    })
    .on("/products/:id", (params) => {
      axiosInstance.get(`/products/${params.data.id}`).then((res) => {
        root.innerHTML = "";
        root.append(shoeInfo(res.data));
      });
    })
    .on("/mostPopular", (params) => {
      axiosInstance.get(`/products?${params.data}`).then((res) => {
        root.innerHTML = "";
        const cards = res.data.map((item) => {
          return shoe(item);
        });
        root.append(mostPopular(cards));
      });
    })
    .on("/myCart", () => {
      root.innerHTML = "";
      root.append(myCart(1));
    })
    .on("/checkout", () => {
      root.innerHTML = "";
      root.append(checkout());
    })
    .on("/shippingAddress", () => {
      root.innerHTML = "";
      root.append(shippingAddress());
    })
    .on("/shippingType", () => {
      root.innerHTML = "";
      root.append(shippingType());
    })
    .on("/paymentMethod", () => {
      root.innerHTML = "";
      root.append(paymentMethod());
    })
    .on("/paymentModal", () => {
      root.innerHTML = "";
      root.append(paymentModal());
    })
    .on("/wishlist", () => {
      axiosInstance.get(`/users/1`).then((res) => {
        root.innerHTML = "";
        console.log(res.data);
        // const cards = res.data.map((item) => {
        //   return wishlistShoe(item);
        // });
        root.append(wishlist(res.data.wishlist));
      });
    })
    .on("/:name", (params) => {
      axiosInstance.get(`/products?brand=${params.data.name}`).then((res) => {
        root.innerHTML = "";
        const cards = res.data.map((item) => {
          return shoe(item);
        });
        root.append(singleProduct(cards, params.data.name));
      });
    })
    // .notFound(() => {
    //   root.innerHTML = "";
    //   root.append(PageNotFound());
    // });
    .on("/home/search/:searchValue", ({ data }) => {
      axiosInstance.get(`/products?brand=${data.searchValue}`).then(res => {
        let cartsArr = res.data
        let cartsElement = cartsArr.map((item) => {
          return shoe(item);
        })
        let resultContainer = document.getElementById('showResult');
        resultContainer.innerHTML = '';
        console.log(cartsElement)
        resultContainer.append(...cartsElement)
      })
    })
    .on('/search/pageNotFound', () => {
      // root.innerHTML = '';
      // root.append(PageNotFound())
      let resultContainer = document.getElementById('showResult')
      resultContainer.innerHTML = ''
      resultContainer.append(PageNotFound())
    })
  route.resolve();
  return route;
};

export default Router;
