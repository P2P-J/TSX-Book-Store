import Home from "./pages/Home";

import Layout from "./components/common/layout/Layout";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/common/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemePrivider } from "./context/themeContext";

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <BookStoreThemePrivider>
      {/* <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} /> */}
      <Layout>
        <Home /> 이 부분이 children으로 전달돼
      </Layout>
    </BookStoreThemePrivider>
  );
}

export default App;
