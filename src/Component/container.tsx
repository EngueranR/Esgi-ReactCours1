import { useTheme } from "../DarkThemeContext";
import "./Container.css";

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  const { darkTheme } = useTheme();
  return (
    <div className={`container ${darkTheme ? "dark" : ""}`}>{children}</div>
  );
}
