
import './App.css';
import React, { Fragment, useEffect, useState } from "react";

function App() {
  const [ todos, setTodos ] = useState([]);
  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/rooms");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <div className="App">
      <h1>Test</h1>


    </div>
  );
}

export default App;
