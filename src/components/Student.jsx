import React from 'react'

const Student = ({student,onExit}) => {

    let title='';
 (student.avg>=90)? title='מצטיין': (student.avg <= 60) ? title = 'טעון שיפור':'';

    const handleStudentExit = () => {
        onExit();
        const now = new Date();
        const exitTimeNow = now.toLocaleTimeString('he'); 
        console.log(`${student.name} יצא בשעה - ${exitTimeNow}`);   
    };
    
  return (
    <>
     <h3>{student.name}</h3>
     <p>גיל: {student.age}</p>
     <p>ממוצע:{student.avg}</p>
     <p> תואר:{title}</p>
     <button onClick={handleStudentExit}> יציאה</button>
    </>
  )
}

export default Student
