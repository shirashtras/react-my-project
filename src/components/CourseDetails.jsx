import React from "react";

const CourseDetails = ({ name, grade }) => {
  return (
    <div>
      <p>Course: {name}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

export default CourseDetails;
