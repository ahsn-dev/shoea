import Navigo from "navigo";
import starter from "../pages/starter";
import welcome from "../pages/welcome";
import slider from "@/pages/slider";
import login from "@/pages/login";
import home from "@/pages/home";
import shoeInfo from "@/pages/shoeInfo";

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
    .on("/shoeInfo", () => {
      root.innerHTML = "";
      root.append(shoeInfo());
    })
    .notFound(() => {
      console.log("page not found!!!");
    });
  route.resolve();
  return route;
};

export default Router;
