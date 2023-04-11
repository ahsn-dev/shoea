import El from "./library/El";
import login from "./pages/login";

const App = () => {
  const app = El({
    element: "div",
    child: [login()],
  });

  return app;
};

export default App;
