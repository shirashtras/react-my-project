import React, { useState } from 'react';

const PasswordStrengthIndicator = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setStrength('סיסמה חלשה');
    } 
    else if (value.length < 10) {
      setStrength('סיסמה בינונית');
    }
    else {
      setStrength('סיסמה חזקה');
    }
  };

  return (
    <div>
      <h4>חוזק הסיסמה שלך הוא: {strength}</h4>
      <input onBlur={handleChangePassword} />
    </div>
  );
};

export default PasswordStrengthIndicator;