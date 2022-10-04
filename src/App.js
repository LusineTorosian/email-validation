import './App.css';
import React, { useState } from 'react';

function App() {

  const [email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-] + @[a-z0-9-]+\.[a-z]{2,8}|(.[a-z{}])?/g
    if(regEx.test(email)) {
      setMessage("Email is vaild")
    } else if (!regEx.test(email) && email !== 0) {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  }

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="app">
      <div className="header">
        <h2> Email validation</h2>
      </div>
      <div className="card">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input 
          id="email"
          className="input"
          type="email"
          placeholder="email" 
          value={email}
          onChange={onChangeHandler} 
        />
        <button onClick={emailValidation}>Check</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
