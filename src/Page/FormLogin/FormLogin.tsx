import { useTheme } from "../../Context/DarkThemeContext";
import "./formLogin.css";
import { ReactNode } from "react";

export default function FormLogin({ children }: { children: ReactNode }) {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className={`formLogin ${darkTheme ? "dark" : ""}`}>
      <button className="button" onClick={toggleTheme}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
      {children}
    </div>
  );
}
