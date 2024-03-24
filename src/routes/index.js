import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFoundPage";
import HomePage from "../pages/HomePage";
import SigninPage from "../pages/auth/SigninPage";
import SignupPage from "../pages/auth/SignupPage";

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
    path: "/signup",
    element: <SignupPage />,
  },
]);
