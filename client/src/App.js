import React from "react"
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListTopics from "./components/listTopics";
import ViewTopic from "./components/viewTopic";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={ListTopics} exact/> 
        <Route path="/topic" component={ViewTopic} />
      </div>
    </Router>
  );
}

export default App;
