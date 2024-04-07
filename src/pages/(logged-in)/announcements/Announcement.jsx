import React , { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import AnnouncementDetailCard from "../../../components/announcements/AnnouncementDetailCard";
import { getAnnouncementsById } from "../../../services/api/announcement_service";

const Announcement = () => {
  const params = useParams();
  const [announcement, setAnnouncement] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchAnnouncementById = async () => {
    setIsLoading(true);
    const response = await getAnnouncementsById(params.id);
    setAnnouncement(response.data);
  };

  useEffect(() => {
    fetchAnnouncementById();
  }, []);
  return (
    <div>
      <NavigationBar />
      <AnnouncementDetailCard id={params.id} announcement={announcement} />
      <Footer />
    </div>
  );
};

export default Announcement;
