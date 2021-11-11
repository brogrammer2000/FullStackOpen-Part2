import React from "react";
import personService from "../services/personservice";

const People = ({ newPeople, message }) => {
  const deleteHandler = (id, name) => {
    // console.log(`name`, name);
    let decision = window.confirm(`Do you really want to delete ${name}`);
    if (decision) {
      personService.deletePerson(id);
    }
  };
  return newPeople.map((x) => (
    <li key={x.id}>
      {x.name} {x.number} <button onClick={() => deleteHandler(x.id, x.name)}> Delete </button>
    </li>
  ));
};

export default People;
