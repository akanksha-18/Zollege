import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    if (isShown) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [isShown, onClose]);

  if (!isShown) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`min-w-52 bg-white border shadow-2xl rounded-md after:w-[5px] after:h-full ${
          type === "delete" ? "after:bg-red-500" : "after:bg-green-500"
        } after:absolute after:left-0 after:top-0 after:rounded-l-lg relative p-4 flex items-center gap-3`}
      >
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full ${
            type === "delete" ? "bg-red-50" : "bg-green-50"
          }`}
        >
          <LuCheck className="text-xl text-green-500" />
        </div>

        <p className="text-sm text-slate-800">{message}</p>

        <button onClick={onClose} className="ml-auto text-sm text-gray-600 hover:text-gray-800">
          ✖
        </button>
      </div>
    </div>
  );
};

export default Toast;
