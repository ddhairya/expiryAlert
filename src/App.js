import GStyle from "./assests/style/global";
import NavigationBar from "./component/NavigationBar";
import MainItemView from "./component/MainItem";
import Create from "./component/Create"
import CardDetails from "./component/CardDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GStyle>
        <NavigationBar/>
          <Switch>
            <Route exact path="/">
              <MainItemView/>
            </Route>
            <Route path="/add">
              <Create/>
            </Route>
            <Route path="/items/:id">
              <CardDetails/>
            </Route>
          </Switch>
      </GStyle>
    </Router>
  );
}

export default App;
