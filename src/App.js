import "./App.css";
import Nav from "./components/Nav/Nav.js";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

function App() {
  const location = new ReactLocation();

  return (
    <>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: () =>
              import("./components/LandingPage/LandingPage").then((module) => (
                <module.default />
              )),
          },
          {
            path: "/portfolio",
            element: () =>
              import("./components/Portfolio/Portfolio").then((module) => (
                <module.default />
              )),
          },
          {
            path: "/about",
            element: () =>
              import("./components/AboutMe/AboutMe").then((module) => (
                <module.default />
              )),
          },
          {
            path: "/shop",
            element: () =>
              import("./components/Shopping/Shopping").then((module) => (
                <module.default />
              )),
          },
        ]}
      >
        <Nav />
        <Outlet />
      </Router>
    </>
  );
}

export default App;
