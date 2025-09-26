import React from "react";
import CourseDetails from "./CourseDetails";

const PersonDetails = () => {
  const person = {
    name: "Shira",
    age: 19,
    courses: [
      { name: "React", grade: 95 },
      { name: "Node.js", grade: 90 },
    ],
  };

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>

      <h3>Courses:</h3>
      {person.courses.map((course, index) => (
        <CourseDetails key={index} name={course.name} grade={course.grade} />
      ))}
    </div>
  );
};

export default PersonDetails;

