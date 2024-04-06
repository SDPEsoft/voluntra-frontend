import React from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import MemberDetailsCard from "../../../components/organizations/MemberDetailsCard";

const member = {
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

const Member = () => {
  const params = useParams();
  return (
    <div>
      <NavigationBar />
      <MemberDetailsCard id={params.id} member={member} />
      <Footer />
    </div>
  );
};

export default Member;
