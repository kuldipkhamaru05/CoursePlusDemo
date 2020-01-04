import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { render } from "./utils";
import './App.scss';

// Common Components
const Header = lazy(() => import("./components/header"));
const Footer = lazy(() => import("./components/footer"));
const SideMenu = lazy(() => import("./components/side-menu"));

// Route Components
const Dashboard = lazy(() => import("./screens/dashboard"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader loader-circle" />}>
          <div className="wrapper">
            <SideMenu />
              <Header />
                  <main className="main">
                      <Switch>
                            <Route  exact  path="" render={render(<Dashboard />)}/>
                      </Switch>
                  </main>
              <Footer />
          </div>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
