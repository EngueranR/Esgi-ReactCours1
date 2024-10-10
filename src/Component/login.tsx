import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    navigate("/user/home");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
