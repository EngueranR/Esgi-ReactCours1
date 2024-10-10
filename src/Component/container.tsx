import { useTheme } from "../DarkThemeContext";
import "./Container.css";

import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    const { darkTheme, toggleTheme } = useTheme();
  return <div className={`container ${}`}>{children}</div>;
}
