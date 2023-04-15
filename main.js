import App from "./src/App.js";
import Router from "./src/functions/router";
import "swiper/css/bundle";
import "./src/styles/style.css";

const rootApp = document.getElementById("app");

rootApp.appendChild(App());
Router().navigate("/");
setTimeout(() => {
  Router().navigate("/welcome");
}, 2000);
