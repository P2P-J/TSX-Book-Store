import Home from "./pages/Home";

import Layout from "./components/common/layout/Layout";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/common/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemePrivider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: "/books",
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },

  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <BookStoreThemePrivider>
      {/* <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} /> */}
      <RouterProvider router={router} /> 이 부분이 children으로 전달돼
    </BookStoreThemePrivider>
  );
}

export default App;
