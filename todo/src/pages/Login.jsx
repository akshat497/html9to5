import { useState } from "react";
import "./Login.css";
import users from "../users.json";
import { useNavigate } from "react-router-dom";
export default function Login({user,setUser}) {
     let navigate=useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
   
  function LoginUser() {

  users.find((user) => {
      if (user.username === userName && user.password === password) {
        localStorage.setItem("user",JSON.stringify(user));
        setUser(user);
        navigate('/home');

      }
      return false;
    });

  
  }

  return (
    <div id="container">
      {" "}
      <div id="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button onClick={LoginUser}>Login</button>
      </div>
    </div>
  );
}
