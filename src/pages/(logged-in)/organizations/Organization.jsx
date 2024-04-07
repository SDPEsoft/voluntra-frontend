import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import OpportunityDetailsCard from "../../../components/opportunities/OpportunityDetailsCard";
import OrganizationDetailsCard from "../../../components/organizations/OrganizationDetailsCard";
import { getOrganizationById } from "../../../services/api/organization.service";

// const organization = {
//   id: 1,
//   name: "Rotary Club",
//   email: "info@organization.com",
//   logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//   description: "Organization 1 description",
//   address: "Caption Nimentha Rajapaksha Lane, Wellawatta ,Colombo 03.",
//   start_date: "12-05-2024",
//   members_count: 100,
//   rating: 3,
// };

const Organization = () => {
  const params = useParams();
  const [organization, setOrganization] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchOrganizationById = async() => {
    setIsLoading(true);
    const response =await getOrganizationById(params.id);
    setOrganization(response.data);
  };

  useEffect(() => {
    fetchOrganizationById();
  }, []);
  return (
    <div>
      <NavigationBar />
      <OrganizationDetailsCard id={params.id} organization={organization} />
      <Footer />
    </div>
  );
};

export default Organization;
