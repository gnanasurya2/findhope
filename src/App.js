import React from "react";
import "./App.css";
import Homepage from "./containers/homepage";
import Layout from "./components/Layout";
import Testpage from "./containers/Testpage";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/test">
              <Testpage />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
