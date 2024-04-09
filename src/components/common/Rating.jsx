import React, { useEffect } from "react";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
import { getRatesByVol } from "../../services/api/rate_service";
const Rating = ({ id }) => {
  const [rating, setRating] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchRating = async () => {
    setIsLoading(true);
    let totalRate = 0;
    const response = await getRatesByVol(id);
    response?.data?.map((rate) => {
      totalRate += parseInt(rate?.rate) || 0;
    });
    setRating(parseInt(totalRate) / parseInt(response?.data?.length) || 0);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchRating();
    }
  }, [id]);

  return (
    <div>
      {[...Array(5)]?.map((_, i) => {
        return i < rating ? <IoMdStar /> : <IoIosStarOutline />;
      })}
    </div>
  );
};

export default Rating;
