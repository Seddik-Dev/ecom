import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import { ROUTES } from "./routes";
import MainLayout from "../layouts/MainLayout";
import LoginAdmin from "../pages/admin/LoginAdmin";
import LayoutAdmin from "../layouts/LayoutAdmin";
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
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: "/admin/login",
        element: <LoginAdmin />,
      },
    ],
  },
]);
