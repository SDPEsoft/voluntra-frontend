import React from "react";
import VolunteerDetailsCard from "../volunteers/VolunteerDetailsCard";
import OrganizationDetailsCard from "../organizations/OrganizationDetailsCard";
import { useAuth } from "../auth/AuthProvider";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <>
      {user?.role === "organization" ? <OrganizationDetailsCard /> : null}
      {user?.role === "volunteer" ? <VolunteerDetailsCard /> : null}
    </>
  );
};

export default UserProfile;
