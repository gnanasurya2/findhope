import React, { Suspense, lazy } from "react";
import "./App.css";
import Layout from "./components/Layout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import withTracker from "./withTracker";
const Homepage = lazy(() => import("./containers/homepage"));
const Test = lazy(() => import("./containers/Test"));
const Testpage = lazy(() => import("./containers/Testpage"));
const YouthAdvocates = lazy(() => import("./containers/YouthAdvocates"));
const PeerCounsellor = lazy(() => import("./containers/PeerCounsellor"));
const Profile = lazy(() => import("./containers/Profile"));
const Questions = lazy(() => import("./containers/Questions"));
const Result = lazy(() => import("./containers/Result"));
const Advocates = lazy(() => import("./containers/Advocates"));
const Blogs = lazy(() => import("./containers/Blogs"));
const Blog = lazy(() => import("./containers/Blog"));
const Blogger = lazy(() => import("./containers/Blogger"));
const FreeCounseling = lazy(() => import("./containers/FreeCounseling"));
const College = lazy(() => import("./containers/college"));
const Chat = lazy(() => import("./containers/Chat"));
const CreateProfile = lazy(() => import("./containers/CreateProfile"));
function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path="/test/:testName" component={withTracker(Test)} />
              <Route path="/test">
                <Testpage />
              </Route>
              <Route path="/createprofile">
                <CreateProfile />
              </Route>
              <Route
                path="/freecounseling"
                component={withTracker(PeerCounsellor)}
              />
              <Route
                path="/freecounselingform"
                component={withTracker(FreeCounseling)}
              />
              <Route
                path="/youthAdvocates"
                component={withTracker(YouthAdvocates)}
              />
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
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/blog/:name">
                <Blog />
              </Route>
              <Route path="/blogger/:name">
                <Blogger />
              </Route>
              <Route exact path="/chat" component={withTracker(Chat)} />
              <Route exact path="/:name" component={College} />
              <Route exact path="/" component={withTracker(Homepage)} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
