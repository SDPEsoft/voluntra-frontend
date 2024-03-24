import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFoundPage";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/auth/SigninPage";
import AdminSignupPage from "../pages/auth/AdminSignupPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignupPage />,
  },
]);
