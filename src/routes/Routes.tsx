import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import AboutUsPage from "../pages/AboutUsPage";
import MarkdownPage from "../components/MarkdownPage";
// import MarkdownComponent from "../components/MarkdownComponent";

export const router = createBrowserRouter([
  {
    path: "/taste-without-trouble/*",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "recipes",
        element: <RecipesPage />,
        children: [{ path: ":filename", element: <MarkdownPage /> }],
      },
      { path: "about", element: <AboutUsPage /> },
    ],
  },
]);
