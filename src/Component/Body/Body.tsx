import { useTheme } from "../../Context/DarkThemeContext";
import "./Body.css";
import { ReactNode } from "react";

export default function Body({ children }: { children: ReactNode }) {
  const { darkTheme } = useTheme();
  return <div className={`body ${darkTheme ? "dark" : ""}`}>{children}</div>;
}
