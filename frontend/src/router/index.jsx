import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";
import { ROUTES } from "./routes";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import LoginUser from "../pages/users/LoginUser";
import Admindashboard from "../pages/admin/Admindashboard";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <p>Not Found.</p>,
      },
      {
        path: "/notfound",
        element: "notfound",
      },
      {
        path: ROUTES.HOME,
        element: <Index />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: ROUTES.USER.LOGIN_USER,
        element: <LoginUser />,
      },
      {
        path: ROUTES.ADMIN.LOGIN_ADMIN,
        element: <LoginUser />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        path: ROUTES.ADMIN.DASHBOARD_ADMIN,
        element: <Admindashboard />,
      },
    ],
  },
]);
