import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import OpportunityDetailsCard from "../../../components/opportunities/OpportunityDetailsCard";
import { getOpportunitiesById } from "../../../services/api/opportunity_service";

// const opportunity = {
//   id: 1,
//   name: "Beach Cleaning",
//   description: "Community service is a good subject to be taught in university levels either for a diploma or degree students because this will make create awareness for them so that they will tend to help other in the future. This community service is my second time doing community service subject before I did for diploma now for degree and I had an excellent time doing this topic.",
//   venue: "BMICH",
//   location_link: "https://www.google.com/maps",
//   date: "12-05-2024",
//   time: "10:00 AM",
//   attendies: 100,
//   organization: {
//     id: 1,
//     name: "Rotary Club",
//     logo_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
//   },
// };
const Opportunity = () => {
  const params = useParams();
  const [opportunity, setOpportunity] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchOpportunityById = async () => {
    setIsLoading(true);
    const response = await getOpportunitiesById(params.id);
    setOpportunity(response.data);
  };

  useEffect(() => {
    fetchOpportunityById();
  }, []);
  return (
    <div>
      <NavigationBar />
      <OpportunityDetailsCard id={params.id} opportunity={opportunity} />
      <Footer />
    </div>
  );
};

export default Opportunity;
