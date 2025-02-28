// import React, { useState, useEffect } from "react";
// import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

// const NoteCard = ({
//   title,
//   date,
//   content,
//   tags,
//   isPinned,
//   onEdit,
//   onDelete,
//   onPinNote,
// }) => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 60000); 

   
//     return () => clearInterval(timer);
//   }, []);

//   const formatDateTime = (date) => {
//     const options = {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric',
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     };
//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   };

//   return (
//     <div className="bg-gradient-to-br from-yellow-100 to-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-300 w-full max-w-sm">
//       {/* Header Section */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h6 className="text-lg font-semibold text-gray-800">{title}</h6>
//           <span className="text-xs text-gray-500">
//             {formatDateTime(currentDateTime)}
//           </span>
//         </div>
//         <MdOutlinePushPin
//           className={`text-xl cursor-pointer transition-colors ${
//             isPinned ? "text-yellow-500" : "text-gray-500 hover:text-gray-700"
//           }`}
//           onClick={onPinNote}
//         />
//       </div>

//       {/* Content */}
//       <p className="text-sm mt-2 text-gray-700 bg-gray-100 p-2 rounded-md">
//         {content?.slice(0, 60)}...
//       </p>

//       {/* Footer */}
//       <div className="mt-3 flex justify-between items-center">
//         <div className="text-xs bg-gray-200 px-2 py-1 rounded-md text-gray-700">
//           {tags.map((item, index) => (
//             <span key={index}>
//               {index > 0 && " "}#{item}
//             </span>
//           ))}
//         </div>
//         <div className="flex gap-3">
//           <MdCreate
//             className="text-lg cursor-pointer text-gray-500 hover:text-green-500 transition-all"
//             onClick={onEdit}
//           />
//           <MdDelete
//             className="text-lg cursor-pointer text-gray-500 hover:text-red-500 transition-all"
//             onClick={onDelete}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NoteCard;

import React, { useState, useEffect } from "react";
import { MdOutlinePushPin, MdCreate, MdDelete } from "react-icons/md";

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
    <div className="bg-gradient-to-br from-blue-100 to-white p-5 rounded-lg shadow-lg border border-blue-300 w-full max-w-sm transition-all">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <h6 className="text-lg font-bold text-blue-800">{title}</h6>
          <span className="text-xs text-gray-500">{formatDateTime(currentDateTime)}</span>
        </div>
        <MdOutlinePushPin
          className={`text-xl cursor-pointer transition-all ${
            isPinned ? "text-blue-500" : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={onPinNote}
        />
      </div>

      {/* Content */}
      <p className="text-sm mt-3 text-gray-700 bg-white p-3 rounded-md shadow-md">
        {content?.slice(0, 80)}...
      </p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs bg-blue-200 px-3 py-1 rounded-md text-blue-800 font-medium">
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
