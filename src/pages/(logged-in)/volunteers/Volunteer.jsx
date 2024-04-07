import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import VolunteerDetailsCard from "../../../components/volunteers/VolunteerDetailsCard";
import { getVolunteerById } from "../../../services/api/volunteer.service";

// const volunteer = {
//   id: 1,
//   name: "Jhon Smith",
//   email: "jhonsmith@gmail.com",
//   phone_no: "0771234567",
//   logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//   description: "Volunteer 1 description",
//   address: "Colombo 03.",
//   dob: "12-05-2024",
//   rating: 3,
// };

const Volunteer = () => {
  const params = useParams();
  const [volunteer, setVolunteer] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchVolunteerById = async () => {
    setIsLoading(true);
    const response = await getVolunteerById(params.id);
    setVolunteer(response.data);
  };

  useEffect(() => {
    fetchVolunteerById();
  }, []);
  return (
    <div>
      <NavigationBar />
      <VolunteerDetailsCard id={params.id} volunteer={volunteer} />
      <Footer />
    </div>
  );
};

export default Volunteer;
