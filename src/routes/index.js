import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "../pages/errors/NotFoundPage";
import HomePage from "../pages/HomePage";
import AdminSignupPage from "../pages/auth/AdminSignupPage";
import VolunteerDashboard from "../pages/(logged-in)/VolunteerDashboard";
import OrganizationDashboard from "../pages/(logged-in)/OrganizationDashboard";
import AdminDashboard from "../pages/(logged-in)/AdminDashboard";
import Opportunities from "../pages/(logged-in)/opportunities/Opportunities";
import Opportunity from "../pages/(logged-in)/opportunities/Opportunity";
import Organizations from "../pages/(logged-in)/organizations/Organizations";
import Organization from "../pages/(logged-in)/organizations/Organization";
import Volunteers from "../pages/(logged-in)/volunteers/Volunteers";
import Volunteer from "../pages/(logged-in)/volunteers/Volunteer";
import AdminLogin from "../pages/auth/AdminLogin";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/signin",
    element: <AdminLogin />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignupPage />,
  },
  {
    path: "/volunteer-dashboard",
    element: <VolunteerDashboard />,
  },
  {
    path: "/organization-dashboard",
    element: <OrganizationDashboard />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/opportunities",
    element: <Opportunities />,
  },
  {
    path: "/opportunities/:id",
    element: <Opportunity />,
  },
  {
    path: "/organizations",
    element: <Organizations />,
  },
  {
    path: "/organizations/:id",
    element: <Organization />,
  },
  {
    path: "/volunteers",
    element: <Volunteers />,
  },
  {
    path: "/volunteers/:id",
    element: <Volunteer />,
  },
]);
