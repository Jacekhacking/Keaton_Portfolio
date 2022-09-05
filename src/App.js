import "./App.css";
import Nav from "./components/Nav/Nav.js";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Shopping from "./components/Shopping/Shopping";
import { useState } from "react";
import { Outlet, ReactLocation, Router } from "@tanstack/react-location";

function App() {
  const [page, handlePageChange] = useState();
  const location = new ReactLocation();

  // const renderPage = () => {
  //   switch (page) {
  //     case "About Me":
  //       return <AboutMe />;

  //     case "Portfolio":
  //       return <Portfolio />;

  //     case "Shopping":
  //       return <Shopping />;

  //     default:
  //       return <LandingPage page={page} handlePageChange={handlePageChange} />;
  //   }
  // };

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
        <Nav page={page} handlePageChange={handlePageChange} />
        <Outlet />
      </Router>
    </>
  );
}

export default App;
