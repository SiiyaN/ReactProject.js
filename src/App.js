import "./styles.css";
import ReactDOM from "react-dom";
import Search from "./Search";
import Forecast from "./Forecast";
import Humidity from "./Humidity";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Temperature value="12" city="Sandton" />
      <Forecast />
      <Humidity />
    </div>
  );
}
