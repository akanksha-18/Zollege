import React from "react";
import img from "../../assets/9412357.jpg";

const EmptyCard = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-center">
      <img src={img} alt="no notes" className="w-80 h-80 object-cover mb-6" />
      <p className="text-xl text-gray-700 font-semibold">
        You have no notes yet. Start creating your first note now!
      </p>
    </div>
  );
};

export default EmptyCard;
