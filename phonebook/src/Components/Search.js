import React from "react";
import People from "./AllPeople";

const Filtering = ({ search, persons }) => {
  let newPeople = [];
  const regex = new RegExp(search, "gi");

  if (search.length === 0) {
    newPeople = persons;
  } else {
    newPeople = persons.filter((person) => person.name.match(regex) !== null);
  }

  return <People newPeople={newPeople} />;
};

export default Filtering;
