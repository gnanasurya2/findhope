import React from "react";
import "./App.css";
import Homepage from "./containers/homepage";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Homepage />
      </Layout>
    </div>
  );
}

export default App;
