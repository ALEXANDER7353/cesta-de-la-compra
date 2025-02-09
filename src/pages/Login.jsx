import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isNightMode, setIsNightMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    login(userData);
    navigate("/products");
  };

  useEffect(() => {
    const hour = new Date().getHours();
    const isDayTime = hour > 6 && hour < 19;
    setIsNightMode(!isDayTime);
    document.documentElement.style.setProperty(
      "--background-color",
      isDayTime ? "white" : " black"
    );
    document.documentElement.style.setProperty(
      "--text-color",
      isDayTime ? "black" : "white"
    );
    document.documentElement.style.setProperty(
      "--input-text-color",
      isDayTime ? "lightsteelblue" : "lightsteelblue"
    );
    document.documentElement.style.setProperty(
      "--input-bg-color",
      isDayTime ? "white" : "white"
    );
    document.documentElement.style.setProperty(
      "--input-border-color",
      isDayTime ? "lightsteelblue" : "lightsteelblue"
    );
    document.documentElement.style.setProperty(
      "--button-bg-color",
      isDayTime ? "lightsteelblue" : "lightsteelblue"
    );
    document.documentElement.style.setProperty(
      "--button-text-color",
      isDayTime ? "black" : "white"
    );
  }, []);

  return (
    <div className={`login-container ${isNightMode ? "night-mode" : ""}`}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
