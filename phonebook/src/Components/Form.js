import React from "react";

const Form = ({ addPerson, newName, newNumber, onChangeHandler, onNumberChangeHandler }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={onChangeHandler} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
