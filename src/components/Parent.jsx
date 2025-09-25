import React from 'react'
import Child1 from './Child1';
import Child2 from './Child2';


const Parent = () => {
  return (
    <div className="parent">
      <h1>פרטים אישיים</h1>
      <p>שם: שירה שטרסברג</p>
      <p>גיל: 19</p>
      <Child1 />
      <Child2 />
    </div>
  );
};

export default Parent;