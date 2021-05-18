import "./App.css";

// getting axios

import { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUserName] = useState("");
  const [succesMsg, setSuccesMsg] = useState("");

  const getName = (event) => {
    setUserName(event.target.value);
  };
  const sendToBackend = (data) => {
    console.log("username is:", data);
    axios
      .get("http://localhost:5000/user/data", { username: data })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setSuccesMsg(response.data);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN fullstack app Test simple way</h1>
        <label>Username:</label>
        <h1>{setSuccesMsg}</h1>
        <input type="text" onChange={getName} />
        <button onClick={() => sendToBackend(username)} type="submit">
          Send to Backend
        </button>
      </header>
    </div>
  );
}
export default App;
