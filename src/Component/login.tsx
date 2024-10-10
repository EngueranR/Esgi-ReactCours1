import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
