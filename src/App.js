import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
