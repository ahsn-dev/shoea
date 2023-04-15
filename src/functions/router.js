import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import login from "@/pages/login";
import home from "@/pages/home";
// import { slider } from "@/pages/slider";
import { StartSlider } from "@/pages/slider";
import { configSwiper } from "@/pages/slider";

const Router = () => {
  const root = document.getElementById("root");
  const route = new Navigo("/");
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
      root.append(StartSlider());
      configSwiper();
    })
    // .on("/swiper", () => {
    //   settingSwipper();
    //   root.innerHTML = "";
    //   root.append(slider());
    // })
    .on("/login", () => {
      root.innerHTML = "";
      root.append(login());
    })
    .on("/home", () => {
      root.innerHTML = "";
      root.append(home());
    });
  route.resolve();
  return route;
};

export default Router;
