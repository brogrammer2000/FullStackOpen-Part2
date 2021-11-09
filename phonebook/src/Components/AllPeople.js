import React from "react";

const People = ({ newPeople }) => {
  return newPeople.map((x) => (
    <li key={x.name}>
      {x.name} {x.number}
    </li>
  ));
};

export default People;
