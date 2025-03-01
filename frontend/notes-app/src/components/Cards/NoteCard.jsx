import React, { useState, useEffect } from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

const getRandomGradient = () => {
  const colors = [
    ["from-pink-200", "to-pink-50", "border-pink-500"],
    ["from-yellow-200", "to-yellow-50", "border-yellow-500"],
    ["from-green-200", "to-green-50", "border-green-500"],
    ["from-blue-200", "to-blue-50", "border-blue-500"],
    ["from-purple-200", "to-purple-50", "border-purple-500"],
    ["from-orange-200", "to-orange-50", "border-orange-500"],
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [gradient, setGradient] = useState(getRandomGradient());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div
      className={` p-5 rounded-lg shadow-lg w-full max-w-sm transition-all bg-gradient-to-br ${gradient[0]} ${gradient[1]} border-4 ${gradient[2]}`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h6 className="text-lg font-bold text-gray-900">{title}</h6>
          <span className="text-xs text-gray-600">{formatDateTime(currentDateTime)}</span>
        </div>
        <MdOutlinePushPin
          className={`text-xl cursor-pointer transition-all ${
            isPinned ? "text-blue-500" : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-sm mt-3 text-gray-800 bg-white p-3 rounded-md shadow-md">
        {content?.slice(0, 80)}...
      </p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs bg-gray-200 px-3 py-1 rounded-md text-gray-800 font-medium">
          {tags.map((item, index) => (
            <span key={index}>
              {index > 0 && " "}#{item}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <MdCreate
            className="text-xl cursor-pointer text-gray-500 hover:text-green-500 transition-all"
            onClick={onEdit}
          />
          <MdDelete
            className="text-xl cursor-pointer text-gray-500 hover:text-red-500 transition-all"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
