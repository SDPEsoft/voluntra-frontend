import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import AnnouncementDetailCard from "../../../components/announcements/AnnouncementDetailCard";

const announcement = {
  id: 1,
  name: "Jhon Smith",
  email: "jhonsmith@gmail.com",
  phone_no: "0771234567",
  logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  description: "Volunteer 1 description",
  address: "Colombo 03.",
  dob: "12-05-2024",
  rating: 3,
};

const Announcement = () => {
  const params = useParams();
  return (
    <div>
      <NavigationBar />
      <AnnouncementDetailCard id={params.id} announcement={announcement} />
      <Footer />
    </div>
  );
};

export default Announcement;
