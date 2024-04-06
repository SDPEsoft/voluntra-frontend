import React from "react";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import UserProfile from "../../../components/user/UserProfile";

const Profile = () => {
  return (
    <div>
      <NavigationBar />
      <UserProfile />
      <Footer />
    </div>
  );
};

export default Profile;
