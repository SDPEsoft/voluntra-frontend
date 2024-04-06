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
import VolunteerSignup from "../pages/auth/VolunteerSignup";
import VolunteerSignin from "../pages/auth/VolunteerSignin";
import OrganizationSignup from "../pages/auth/OrganizationSignup";
import OrganizationSignin from "../pages/auth/OrganizationSignin";
import Profile from "../pages/(logged-in)/user/Profile";
import Members from "../pages/(logged-in)/organizations/Members";
import Member from "../pages/(logged-in)/organizations/Member";
import Announcements from "../pages/(logged-in)/announcements/Announcements";
import Announcement from "../pages/(logged-in)/announcements/Announcement";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignupPage />,
  },
  {
    path: "/admin/signin",
    element: <AdminLogin />,
  },
  {
    path: "/volunteer/signup",
    element: <VolunteerSignup />,
  },
  {
    path: "/volunteer/signin",
    element: <VolunteerSignin />,
  },
  {
    path: "/organization/signup",
    element: <OrganizationSignup />,
  },
  {
    path: "/organization/signin",
    element: <OrganizationSignin />,
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
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "/members/:id",
    element: <Member />,
  },
  {
    path: "/announcements",
    element: <Announcements />,
  },
  {
    path: "/announcements/:id",
    element: <Announcement />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
