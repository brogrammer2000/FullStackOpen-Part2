import React, { useState } from "react";
import Filtering from "./Components/Search";
import Form from "./Components/Form";

const App = () => {
  let [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  let [newName, setNewName] = useState("");
  let [newNumber, setNewNumber] = useState("");
  let [search, setSearch] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    function userExists(name) {
      return persons.some(function (el) {
        return el.name === name;
      });
    }

    if (userExists(newName) === false) {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      newName = "";
      newNumber = "";
      // console.log(persons);
    } else if (userExists(newName) === true) {
      alert(newName + " is already added to phonebook");
    }
  };

  const onChangeHandler = (event) => {
    let naam = event.target.value;
    console.log(naam);
    setNewName(naam);
  };

  const onNumberChangeHandler = (event) => {
    let numb = event.target.value;
    console.log(`numb`, numb);
    setNewNumber(numb);
  };

  const searchHandler = (event) => {
    let khoj = event.target.value;
    // console.log(khoj);
    setSearch(khoj);
    console.log(search);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with: <input value={search} onChange={searchHandler} />
      </div>
      <h2>Add a new</h2>
      <Form
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        onChangeHandler={onChangeHandler}
        onNumberChangeHandler={onNumberChangeHandler}
      />
      <h2>Numbers</h2>
      <div>
        <ol>
          <Filtering search={search} persons={persons} />
        </ol>
      </div>
    </div>
  );
};

export default App;
