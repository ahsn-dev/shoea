import El from "./library/El";
import home from "./pages/home";

const App = () => {
  const app = El({
    element: "div",
    id: "root",
    child: [home()],
  });

  return app;
};

export default App;
