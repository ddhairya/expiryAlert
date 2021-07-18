import {Container, Jumbotron } from "react-bootstrap";
import GStyle from "./assests/style/global";
import NavigationBar from "./component/NavigationBar";
import MainItemView from "./component/MainItem";

function App() {
  return (
    <GStyle>
      <NavigationBar/>
      <MainItemView/>
    </GStyle>
  );
}

export default App;
