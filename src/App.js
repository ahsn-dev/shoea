import El from "./library/El";
import shoeInfo from "./pages/shoeInfo";

const App = () => {
  const app = El({
    element: "div",
    // id: "root",
    child: [shoeInfo()],
  });

  return app;
};

export default App;
