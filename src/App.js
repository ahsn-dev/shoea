import El from "./library/El";
import FirstPage from "./components/FirstPage";
// import MainWelcomePage from "./components/MainWelcomePage";
// import FirstWelcomePage from "./components/FirstWelcomePage";
// import SecondWelcomePage from "./components/SecondWelcomePage";
// import ThirdWelcomePage from "./components/ThirdWelcomePage";
// import LoginPage from "./components/LoginPage";

const App = () => {
  const app = El({
    element: "div",
    child: [FirstPage()],
    // LoginPage()
  });

  return app;
};

export default App;
