import React, { useState, useEffect } from "react";
import Filtering from "./Components/Search";
import Form from "./Components/Form";
import personService from "./services/personservice";
import Notification from "./Components/Notification";
// import axios from "axios";

const App = () => {
  let [persons, setPersons] = useState([]);
  let [newName, setNewName] = useState("");
  let [newNumber, setNewNumber] = useState("");
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((x) => {
      setPersons(x.data);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);
    function userExists(name) {
      return persons.some(function (el) {
        return el.name === name;
      });
    }

    if (userExists(newName) === false) {
      let newPerson = { name: newName, number: newNumber };
      personService.create(newPerson).then((x) => setPersons(persons.concat(x)));
      newName = "";
      newNumber = "";
      console.log(newName);
      setMessage(`${newName} has been successfully created`);
      setTimeout(setMessage(null), 5000);
    } else if (userExists(newName) === true) {
      alert(newName + " is already added to phonebook");
    }
  };

  const onChangeHandler = (event) => {
    let naam = event.target.value;
    // console.log(naam);
    setNewName(naam);
  };

  const onNumberChangeHandler = (event) => {
    let numb = event.target.value;
    // console.log(`numb`, numb);
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
      <Notification message={message} />
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
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
      <h2>Numbers</h2>
      <div>
        <ol>
          <Filtering search={search} persons={persons} message={setMessage} />
        </ol>
      </div>
    </div>
  );
};

export default App;
