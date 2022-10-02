import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const person = {
    first: "Mario",
    last: "Lazzari",
  };

  const names = [
    { first: "First 1", last: "Last 1" },
    { first: "First 2", last: "Last 2" },
    { first: "First 3", last: "Last 3" },
  ];

  return (
    <div className="App">
      <Greet name="Mario" messageCount={10} isLoggedIn={true} />
      <Greet name="Mariarosa" messageCount={100} isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={names} />
    </div>
  );
}

export default App;
