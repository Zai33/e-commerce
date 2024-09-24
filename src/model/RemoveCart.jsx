import React from "react";

const RemoveCart = ({ onCancel, onSuccess }) => {
  return (
    <div className="fixed flex items-center justify-center inset-0 z-50 bg-black backdrop-blur-sm bg-opacity-50">
      <div className=" bg-white rounded-lg p-6 w-96 relative">
        <div className="flex flex-col items-center justify-center gap-8 w-full">
          <p className=" text-2xl font-bold text-gray-600">
            Are you sure to remove?
          </p>
          <div className="flex items-center justify-center gap-8 w-full">
            <button
              onClick={onCancel}
              className="w-20 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Cancle
            </button>
            <button
              onClick={onSuccess}
              className="w-20 py-2 bg-sky-500 text-white rounded-md shadow-md hover:bg-sky-600 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveCart;
