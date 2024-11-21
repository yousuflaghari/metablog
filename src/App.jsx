import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Author from "./pages/Author";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import { ThemeProvider } from "styled-components";
import { useToggleTheme } from "./contexts/ToggleThemeContext";
export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  border: "#e8e8ea",
  primary: "#007bff",
};

export const darkTheme = {
  background: "#2c3e50",
  text: "#ecf0f1",
  border: "#242535",
  primary: "#0056b3",
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Homepage /> },
            { path: "/blog", element: <Blog /> },
            { path: "/single-post", element: <Post /> },
            { path: "/pages", element: <Author /> },
            { path: "/contact", element: <Contact /> },
          ],
        },
      ],
    },
  ]);

  const { darkMode } = useToggleTheme();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
