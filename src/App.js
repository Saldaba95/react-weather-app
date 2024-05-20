import Search from "./Search";

import "./App.css";
import Contacts from "./Contacts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Let's search for a city to check the curret weather.</p>
        <Search />
      </header>
      <main>
        {" "}
        <Contacts />
      </main>
    </div>
  );
}

export default App;
