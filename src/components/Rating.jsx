import React from "react";

const Rating = ({ rating }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex mb-2">
      {stars.map((_, index) => {
        const fill =
          index + 1 <= rating
            ? "#ffd700" // Fully filled star
            : index < rating
            ? `url(#half-fill)` // Partially filled star
            : "#d1d5db"; // Unfilled star

        return (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fill}
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {index + 1 > rating && index < rating && (
              <defs>
                <linearGradient id="half-fill">
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
            )}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default Rating;
