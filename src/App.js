import El from "./library/El";
import checkout from "./pages/checkout";

const App = () => {
  const app = El({
    element: "div",
    child: [checkout()],
  });

  return app;
};

export default App;
