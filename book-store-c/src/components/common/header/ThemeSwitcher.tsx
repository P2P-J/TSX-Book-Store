import { ThemeContext } from "styled-components";
import { ThemeName } from "../../../style/theme";
import { useContext } from "react";

function ThemeSwitcher() {
  const { ThemeName, toggleTheme } = useContext(ThemeContext);
}

return <button onClick={toggleTheme}>{themeName}</button>;

export default ThemeSwitcher;
