import "./Body.css";
import { ReactNode } from "react";
import { useTheme } from "../DarkThemeContext";

export default function Body({ children }: { children: ReactNode }) {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div className={`body ${darkTheme ? "dark" : ""}`}>
      <button className="button" onClick={toggleTheme}>
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
      {children}
    </div>
  );
}
