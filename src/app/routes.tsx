import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/about", Component: HomePage },
  {
    path: "/graphics",
    element: <ProjectsPage category="graphics" />,
  },
  {
    path: "/robotics",
    element: <ProjectsPage category="robotics" />,
  },
  {
    path: "/games",
    element: <ProjectsPage category="games" />,
  },
  { path: "*", Component: NotFoundPage },
]);
