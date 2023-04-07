import Navigo from "navigo";

const NavigoEx = () => {
  const router = new Navigo("/");
  router.on("/", () => {
    const root = document.getElementById("root");
    console.log(root);
  });
};

export default NavigoEx;
