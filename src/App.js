import { Route, Switch } from "react-router-dom";
import AboutReact from "./components/AboutReact";

function App() {
  return (
      <Switch>
        <Route path="/react/about-react" component={AboutReact} />
      </Switch>
  );
}

export default App;
