import El from "./library/El";
import search from "./pages/search";

const App = () => {
  const app = El({
    element: "div",
    child: [search()],
  });

  return app;
};

export default App;
