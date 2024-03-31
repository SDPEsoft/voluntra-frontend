import React from "react";
import { IoMdStar, IoIosStarOutline } from "react-icons/io";
const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return i < rating ? <IoMdStar /> : <IoIosStarOutline />;
      })}
    </div>
  );
};

export default Rating;
