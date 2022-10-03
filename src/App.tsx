import React, { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Oscar from "./components/Oscar";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [value, setValue] = useState("");

  const person = {
    first: "Mario",
    last: "Lazzari",
  };

  const names = [
    { first: "First 1", last: "Last 1" },
    { first: "First 2", last: "Last 2" },
    { first: "First 3", last: "Last 3" },
  ];

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("click", e, id);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    </div>
  );
};

export default App;
