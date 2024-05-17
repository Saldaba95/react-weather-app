import logo from "./logo.svg";
import Search from "./Search";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's search for a city to check the curret weather.</p>
        <Search />
      </header>
    </div>
  );
}

export default App;
