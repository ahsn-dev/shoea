import El from "./library/El";
import cart from "./pages/cart";

const App = () => {
  const app = El({
    element: "div",
    child: [cart()],
  });

  return app;
};

export default App;
