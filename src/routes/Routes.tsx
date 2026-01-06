import { createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import AboutUsPage from "../pages/AboutUsPage";
import MarkdownPage from "../components/MarkdownPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
// import MarkdownComponent from "../components/MarkdownComponent";

// https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages
export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <RecipesPage /> },
      { path: "recipes/:filename", element: <MarkdownPage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
