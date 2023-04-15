import App from "./src/App.js";
import Router from "./src/functions/router";
// import { settingSwipper } from "./src/components/slider/swiper/index";

const rootApp = document.getElementById("app");

rootApp.appendChild(App());
Router().navigate("/");
setTimeout(() => {
  Router().navigate("/welcome");
}, 2000);

// settingSwipper();
