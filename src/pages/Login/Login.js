
import React, { useState } from "react";

import './Login.scss'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDeault()
    
  }

  return(
  <div className="container-form">
    <form clasName='' onSubmit={handleLoginSubmit}>
        <div>
      <input
        type="text"
        value={username}
        name="Username"
        placeholder="Username"
        onChange={({target}) => setUsername(target.value)}
      />
      </div>
      <div>
        <input
        type="password"
        value={password}
        name="Password"
        placeholder="Password"
        onChange={({target}) => setPassword(target.value)}
      />
      </div>
      <button>Login</button>
    </form>
  </div>);
}
