import { useState, ChangeEvent, MouseEvent } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/Counter";
import ContextBox from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import User from "./context/User";
import { Private, Profile } from "./auth";
import List from "./generics/List";

const person = {
  first: "Mario",
  last: "Lazzari",
};

const names = [
  { first: "First 1", last: "Last 1" },
  { first: "First 2", last: "Last 2" },
  { first: "First 3", last: "Last 3" },
];

const App = () => {
  const [value, setValue] = useState("");

  const styles = {
    border: "1px solid black",
    padding: "1rem",
    margin: "1rem 0",
  };

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("click", e, id);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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

      <Button onClick={onButtonClick} />
      <Input label="Enter value" value={value} onChange={onInputChange} />

      <Container styles={styles} />

      <Counter />

      <ThemeContextProvider>
        <ContextBox />
      </ThemeContextProvider>

      <UserProvider>
        <User />
      </UserProvider>

      <Private isLoggedIn Component={Profile} />

      <List
        items={[
          { id: 0, value: "Mario" },
          { id: 1, value: "Mariarosa" },
          { id: 2, value: "Maria" },
        ]}
        onClick={item => console.log(item)}
      />
      <List
        items={[
          { id: 1, value: "1" },
          { id: 2, value: "2" },
          { id: 3, value: "3" },
        ]}
        onClick={item => console.log(item)}
      />
    </div>
  );
};

export default App;
