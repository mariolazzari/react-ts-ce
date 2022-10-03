import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Heading from "./components/Heading";

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
      <Greet name="Mariarosa" isLoggedIn={false} />
      <Person name={person} />
      <PersonList names={names} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to... Mario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
