import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Testpage from "./containers/Testpage";
import Test from "./containers/Test";
import Homepage from "./containers/homepage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import YouthAdvocates from "./containers/YouthAdvocates";
import PeerCounsellor from "./containers/PeerCounsellor";
import Profile from "./containers/Profile";
import Questions from "./containers/Questions";
import Result from "./containers/Result";
import FreeCounseling from "./containers/FreeCounseling";
import Advocates from "./containers/Advocates";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/test/:testName">
              <Test />
            </Route>
            <Route path="/test">
              <Testpage />
            </Route>
            <Route path="/freecounseling">
              <PeerCounsellor />
            </Route>
            <Route path="/freecounselingform">
              <FreeCounseling />
            </Route>
            <Route path="/youthAdvocates">
              <YouthAdvocates />
            </Route>
            <Route path="/profile/:name">
              <Profile />
            </Route>
            <Route path="/questions/:testname">
              <Questions />
            </Route>
            <Route path="/result/:testname/:score/:tips">
              <Result />
            </Route>
            <Route path="/youthadvocate/:name">
              <Advocates />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
