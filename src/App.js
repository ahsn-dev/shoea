import El from "./library/El";
// import FirstPage from "./components/FirstPage";
// import WelcomePage from "./components/WelcomePage";
// import FirstWelcomePage from "./components/FirstWelcomePage";
// import SecondWelcomePage from "./components/SecondWelcomePage";
// import ThirdWelcomePage from "./components/ThirdWelcomePage";
import LoginPage from "./components/LoginPage";

const App = () => {
  const app = El({
    element: "div",
    child: [LoginPage()],
  });

  return app;
};

export default App;
