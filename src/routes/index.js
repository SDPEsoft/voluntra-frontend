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
import ProtectedRoute from "../components/auth/ProtectedRoute";

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
    element: (
      <ProtectedRoute>
        <VolunteerDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/organization-dashboard",
    element: (
      <ProtectedRoute>
        <OrganizationDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/opportunities",
    element: (
      <ProtectedRoute>
        <Opportunities />
      </ProtectedRoute>
    ),
  },
  {
    path: "/opportunities/:id",
    element: (
      <ProtectedRoute>
        <Opportunity />
      </ProtectedRoute>
    ),
  },
  {
    path: "/organizations",
    element: (
      <ProtectedRoute>
        <Organizations />
      </ProtectedRoute>
    ),
  },
  {
    path: "/organizations/:id",
    element: (
      <ProtectedRoute>
        <Organization />
      </ProtectedRoute>
    ),
  },
  {
    path: "/volunteers",
    element: (
      <ProtectedRoute>
        <Volunteers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/volunteers/:id",
    element: (
      <ProtectedRoute>
        <Volunteer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members",
    element: (
      <ProtectedRoute>
        <Members />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members/:id",
    element: (
      <ProtectedRoute>
        <Member />
      </ProtectedRoute>
    ),
  },
  {
    path: "/announcements",
    element: (
      <ProtectedRoute>
        <Announcements />
      </ProtectedRoute>
    ),
  },
  {
    path: "/announcements/:id",
    element: (
      <ProtectedRoute>
        <Announcement />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
]);
