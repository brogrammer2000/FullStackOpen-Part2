import React from "react";

const Course = ({ course }) => {
  // console.log(course);
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  // console.log(course);
  let total = course.parts.reduce((x, y) => {
    // console.log("whats happening", x, y.exercises);
    return x + y.exercises;
  }, 0);
  // console.log(total);
  return <p>Total of {total} exercises</p>;
};

const Part = ({ parts }) => {
  // console.log(part);
  return (
    <ul>
      {parts.map((x) => (
        <li key={x.id}>
          {x.name} {x.exercises}
        </li>
      ))}
    </ul>
  );
};

const Content = ({ course }) => {
  // console.log(course);
  return (
    <div>
      <Part parts={course.parts} />
    </div>
  );
};

export default Course;
