import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import { ROUTES } from "./routes";
import MainLayout from "../layouts/MainLayout";
export const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children: [
      {
        path: "*",
        element: <p>Not Found.</p>,
      },
      {
        path: "/notfound",
        element: 'notfound',
      },
      {
        path: ROUTES.HOME,
        element: <Index />,
      },
    ],
  },
]);
