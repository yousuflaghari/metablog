import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/index";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import Author from "./pages/Author";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect, useState } from "react";

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

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="bg-white dark:bg-black">
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
