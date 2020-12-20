import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useLocation } from "@reach/router";

import Home from "./pages/home";
import Media from "./pages/media";
import Design from "./pages/design";
import Contact from "./pages/contact";

const routes = [
  { path: "/", pagename: "Home", Component: Home },
  { path: "/media", pagename: "Media", Component: Media },
  { path: "/design", pagename: "Design", Component: Design },
  { path: "/contact", pagename: "Contact", Component: Contact },
];

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={"pagename"} path={path} exact>
            <div className="page">
              <Component />
            </div>
          </Route>
        ))}
      </div>
    </>
  );
}

export default App;
