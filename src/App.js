import "./App.css";
import Rectangle from "./Rectangle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Form}></Route>
        <Route path="/rectangle" component={Rectangle}></Route>
      </Router>

      {/* <Form />
      <Rectangle /> */}
    </div>
  );
}

export default App;
