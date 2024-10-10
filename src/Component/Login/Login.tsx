import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, errorMessage } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    if (username === "root" && password === "root") {
      navigate("/user/home");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
